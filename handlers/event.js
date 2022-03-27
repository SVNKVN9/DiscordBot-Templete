const { readdirSync } =  require('fs')

module.exports = async (client) => {
    const dirs = readdirSync('./event')
    for(let dir of dirs) {
        const evnetFiles = readdirSync(`./event/${dir}`).filter(file => file.endsWith(".js"))
        for (const file of evnetFiles) {
            const evnet = require(`../event/${dir}/${file}`)
            let eventName = file.split(".")[0];
            client.on(eventName, evnet.bind(null, client))
        }
    }
} 
