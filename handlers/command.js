const { readdirSync } = require("fs");

module.exports = (client) => {
	["developer"].forEach(dirs => {
		const commandFiles = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'))
        for (let file of commandFiles) {
            let command = require(`.././commands/${dirs}/${file}`)
            client.commands.set(command.name, command)
        }
	})
}