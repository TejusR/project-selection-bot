module.exports = {
	name: 'looking-for-people',
	execute(client, message, args) {
        const general = client.channels.cache.find(channel => channel.id === '796334456272584749')
        if (message.channel.id != '796382685689937980') {
            console.log("This is not the channel fren")
            return;
        }
        const nickname = message.member.displayName
        let content =  `Hey! ${nickname} is looking for ${args[0]} people for their project.\nDesc: ${args[1]}.\nReact with :partying_face: if you want to work on it`
        general.send(content)
	},
};