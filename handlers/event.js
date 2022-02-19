const { readdirSync } =  require('fs')

module.exports = async (client) => {
    ["client", "guild"].forEach(dir => {
        const evnetFiles = readdirSync(`./event/${dir}`).filter(file => file.endsWith(".js"))
        for (const file of evnetFiles) {
            const evnet = require(`../event/${dir}/${file}`)
            let eventName = file.split(".")[0];
            await client.on(eventName, evnet.bind(null, client))
        }
    })
} 