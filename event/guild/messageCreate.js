module.exports = async (client, message) => {
    if(message.author.bot)  return
    if(!message.guild) return

    if(!message.content.startsWith(client.config.prefix)) return
    
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = 
        client.commands.get(commandName) || 
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    if(!command) return

    if (command.category == 'developer') {
        if (!client.config.ownerID.includes(message.author.id)) return
    }
    
    try {
        command.execute(message, args, client)
    }catch(err) {
        console.error(err)
    }
}
