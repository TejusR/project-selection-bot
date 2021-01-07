const {generalChannel, reactionEmoji} = require("../constants")
const {getProjectsOfMembers} = require("../helpers/projects")

module.exports = {
	name: 'results',
	execute(client, message, args) {
        let general = message.channel.guild.channels.cache.find(channel => channel.name === generalChannel)

        var ogMessage = message

        general.messages.fetch(client.projects.get(message.member.id)).then(message => {
            for(reaction of message.reactions.cache)
            {
                if(reaction[0] == reactionEmoji)
                {
                    let users = Array.from(reaction[1].users.cache.values()).map(user => user.username)
                    console.log(users)
                    getProjectsOfMembers(client, users).then(projects => {
                        // console.log(projects)
                        projects.sort((a,b) => (a.projects > b.projects) ? 1 : ((b.projects > a.projects) ? -1 : 0));
                        console.log(projects);
                        let content = "People applied:\n";
                        for(user of users)
                            content+=`${user}\n`
                        content+="People recommended by bot\n"
                        console.log(client.people.get(ogMessage.member.id))
                        for(let i = 0; i < client.people.get(ogMessage.member.id) && i<projects.length; i++)
                            content+=`${projects[i].name}\n`

                        ogMessage.channel.send(content)
                    });
                    
                }
                    
            }
        });

        console.log(client.projects.get(message.member.id));
    }
}
