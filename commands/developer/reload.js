module.exports = {
    name: 'reload',
    category: "developer",
    aliases: ["re", "rl"],
    execute(message, args, client) {
	if (!args[0]) return 
	const command = 
	client.commands.get(args[0]) ||
	client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]))
	if (!command) return message.channel.send(`Not Found\`${args[0]}\``);
	try {
		delete require.cache[require.resolve(`../${command.category}/${command.name}.js`)]
		const commandFile = require(`../${command.category}/${command.name}.js`)
		client.commands.set(commandFile.name, commandFile)
		return message.channel.send(`${commandFile.name} reload Successfully.`)
	} catch (error) {
		return console.error(error)
	}
    }
}
