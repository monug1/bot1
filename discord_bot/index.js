const {
    Client,
    Intents
} = require('discord.js');

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on('ready', () => {
    console.log(`ЭТОТ ТУПОЙ БОТ ${bot.user.tag} ЗАПУЩЕН НАКОНЕЦ-ТО!`);
});

bot.login('OTA5OTcxMjUwOTgwNDU4NTQ2.YZMCxA.Tj8S0vbyB0tTe-f_2wTAyJ2_U3g');

bot.on('guildMemberAdd', (member) => {
    console.log(member)
});



function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  };


bot.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('general kenobi')){
        message.channel.send('Hello there!');
    }
	
	if (message.content == '') {
        const exampleEmbed = new MessageEmbed()
            .setColor('#ffd046')
            .setTitle('Server Commands')
            .setDescription('Here you can see the list of the commands used on the server: ')
            .addFields(
                { name: "`$like`", value: 'Likes the current message' },
                { name: "`$dislike`", value: 'Dislikes the current message'},
                { name: "`$random`", value: 'Returns a random number'},
            )
        message.channel.send({embeds: [exampleEmbed]})
    }

    if (message.content == '$like') {
        message.react('👍');
    }

    if (message.content == '$dislike') {
        message.react('👎');
    }

    if(message.content == '$rand3'){

        let randomNumber = getRandomNumber(1, 3);
        message.reply(`Your random number is ${randomNumber}.`)

    }

    if(message.content == '$rand6'){

        let randomNumber = getRandomNumber(1, 6);
        message.reply(`Your random number is ${randomNumber}.`)

    }

    if(message.content == '$rand8'){

        let randomNumber = getRandomNumber(1, 8);
        message.reply(`Your random number is ${randomNumber}.`)

    }

    if(message.content == '$rand10'){

        let randomNumber = getRandomNumber(1, 10);
        message.reply(`Your random number is ${randomNumber}.`)

    }

    if(message.content == '$rand20'){

        let randomNumber = getRandomNumber(1, 20);
        message.reply(`Your random number is ${randomNumber}.`)

        //console.log(Math.floor(3.6))
        //console.log(Math.ceil(3.6))
        //function randomNumber(min, max){
        //    const r = Math.random()*(max-min) + min
        //    return Math.floor(r)
        //}

    }
});