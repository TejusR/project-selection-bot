const axios = require('axios')
const utils = require('../utils');

const getProjectsOfMembers = async(client, members) => {

    let projects = []

    for(member of members)
    {
        let id = client.members.get(member)
        let config = {
            method: 'get',
            url: `https://kitchen.delta.nitt.edu/backend/api/projects/filter/user/${id}`,
            headers: {
                'Authorization': utils.kitchenAuthToken.toString()
            }
        };
        let response = await axios(config);
        projects.push({
            "name": member,
            "projects": response.data.data.filtered[0].projects.length
        })
        // console.log(JSON.stringify(response.data));

        // .catch(function (error) {
        //     console.log(error);
        //   });
          
    }
    return projects
    // 
    // console.log(projects)
    
}

module.exports = {
    getProjectsOfMembers
}