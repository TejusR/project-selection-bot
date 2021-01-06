const {generalChannel, reactionEmoji} = require("../constants")

module.exports = {
	name: 'results',
	execute(client, message, args) {
        let general = message.channel.guild.channels.cache.find(channel => channel.name === generalChannel)

        general.messages.fetch(client.projects.get(message.member.id)).then(message => {
            for(reaction of message.reactions.cache)
            {
                if(reaction[0] == reactionEmoji)
                {
                    let users = Array.from(reaction[1].users.cache.values()).map(user => user.username)
                    console.log(users)
                }
                    
            }
        });

        console.log(client.projects.get(message.member.id));
    }
}
