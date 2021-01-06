module.exports = {
	name: 'looking-for-people',
	execute(client, message, args) {
        const general = client.channels.cache.find(channel => channel.name === 'general')
        if (message.channel.id != '796382685689937980') {
            console.log("This is not the channel fren")
            return;
        }
        const nickname = message.member.displayName
        let projectDesc = ""
        for(let i = 1; i < args.length; i++)
            projectDesc+= `${args[i]} `
        let content =  `Hey! ${nickname} is looking for ${args[0]} people for their project.\nDesc: ${projectDesc}.\nReact with :partying_face: if you want to work on it`
        general.send(content).then(sent=>{
            console.log(sent.id)
        })
	},
};