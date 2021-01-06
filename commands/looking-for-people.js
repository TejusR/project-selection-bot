const {generalChannel, adminChannel} = require("../constants")

module.exports = {
	name: 'looking-for-people',
	execute(client, message, args) {
        const general = client.channels.cache.find(channel => channel.name === generalChannel)
        if (message.channel.name != adminChannel) {
            console.log("This is not the channel fren")
            return;
        }
        const nickname = message.member.displayName
        let projectDesc = ""
        for(let i = 1; i < args.length; i++)
            projectDesc+= `${args[i]} `
        let content =  `Hey! ${nickname} is looking for ${args[0]} people for their project.\nDesc: ${projectDesc}.\nReact with :partying_face: if you want to work on it`
        general.send(content).then(sent=>{
            // console.log(message.member)
            client.projects.set(message.member.id, sent.id)
            // console.log(sent.id)
        })
	},
};