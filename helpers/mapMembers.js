const members = require("../members.json")

const mapMembersToId = (client) => {
    for(member of members)
        client.members.set(member.name,member.id)
}
module.exports = {
    mapMembersToId
}