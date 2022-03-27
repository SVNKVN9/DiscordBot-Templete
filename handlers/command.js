const { readdirSync } = require("fs");

module.exports = (client) => {
    const dirs = readdirSync('./commands')
    for(let dir of dirs) {
        const commandFiles = readdirSync(`./commands/${dir}/`).filter(d => d.endsWith('.js'))
        for (let file of commandFiles) {
            let command = require(`.././commands/${dir}/${file}`)
            client.commands.set(command.name, command)
        }
    }
}
