// Load up the discord.js library
const Discord = require("discord.js");
const Bot = new Discord.Client();

const talkedRecently = new Set();


// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
const prefix = require('./prefix.json'); // path may vary
// config.token contains the bot's token
// config.prefix contains the message prefix.



client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`in ${client.guilds.size} servers!`);
});

client.on("guildCreate", guild => {
    const sentMessage = client.channels.get(`713739853338247229`).send(`New Server joined! This Server has ${guild.memberCount} members!`);
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;


  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  const fs = require("fs");
  const prefix = require('./prefix.json'); // path may vary
  if (prefix[message.author.id] == null){
  prefix[message.author.id] = "..";
  }
  fs.writeFileSync('./prefix.json', JSON.stringify(prefix));



  if(message.content.indexOf(prefix[message.author.id]) !== 0) return;
  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix[message.author.id].length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.



  if(command === "help") {
    console.log('Help command Used');
    message.channel.send({embed: {
    color: 700000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    description: config.version,
    fields: [{
        name: prefix[message.author.id] + "Mod",
        value: "Get The List Of Modoration Commands"
      },
      {
        name: prefix[message.author.id] + "Game",
        value: "Gets The List Of Fun Commands"
      },  {
          name: prefix[message.author.id] + "Img",
          value: "Gets The List Of Commands Doing With Pictures"
      },
      {
        name: prefix[message.author.id] + "Bot",
        value: "Gets The List Of Commands That Have No Place"
      },
      {
        name: prefix[message.author.id] + "txtimg",
        value: "Turns your text into a picture!"
      },
      {
        name: prefix[message.author.id] + "suggest",
        value: "Suggest A Command!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Check Out ..test For Beta Commands"
    }
  }
});
}
  else if(command === "economy") {
    console.log('Economy Help command Used');
    message.channel.send({embed: {
    color: 700000,
    author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
    },
    title: "Economy",
    description: config.version,
    fields: [{
      name: "Economy",
      value: prefix[message.author.id] + "work \n " + prefix[message.author.id] + "balance \n" + prefix[message.author.id] + "shop \n" + prefix[message.author.id] + "inv \n" + prefix[message.author.id] + "buy \n" + prefix[message.author.id] + "use"
    },
    ],
    timestamp: new Date(),
    footer: {
    icon_url: client.user.avatarURL,
    text: "Use ..suggest Or ..server To Help Give This Idea's For ECONOMY"
    }
    }
    });}
  else if(command === "mod") {
    console.log('mod Help command Used');
  message.channel.send({embed: {
  color: 700000,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Modoration",
  description: config.version,
  fields: [{
      name: "Modoration",
      value: prefix[message.author.id] + "ban \n " + prefix[message.author.id] + "kick \n " + prefix[message.author.id] + prefix[message.author.id] + "clear \n " + prefix[message.author.id] + "avatar",
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Mod Bot"
  }
}
});
}
  else if(command === "game") {
    console.log('games Help command Used');
  message.channel.send({embed: {
  color: 700000,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Games",
  description: config.version,
  fields: [{
      name: "Games",
      value: prefix[message.author.id] + "say \n " + prefix[message.author.id] + "hi \n" + prefix[message.author.id] + "simon \n" + prefix[message.author.id] + "creeper \n" + prefix[message.author.id] + "dank \n" + prefix[message.author.id] + "panik \n" + prefix[message.author.id] + "quiz \n" + prefix[message.author.id] + "yeet"
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Mod Bot"
  }
}
});
}
  else if(command === "img") {
    console.log('Img Help command Used');
  message.channel.send({embed: {
  color: 700000,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "img",
  description: config.version,
  fields: [{
      name: "imiges",
      value: prefix[message.author.id] + "meme \n " + prefix[message.author.id] + "dog \n" + prefix[message.author.id] + "loop"
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Mod Bot"
  }
}
});
}
  else if(command === "txtimg") {
    console.log('TXTIMG Help command Used');
message.channel.send({embed: {
color: 700000,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "txtimg",
description: config.version,
fields: [{
    name: "imiges",
    value: prefix[message.author.id] + "neon \n" + prefix[message.author.id] + "steel \n" + prefix[message.author.id] + "gold \n" + prefix[message.author.id] + "gloss \n" + prefix[message.author.id] + "fire \n" + prefix[message.author.id] + "inferno"
  },
],

timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© Mod Bot"
}
}
});
}
  else if(command === "bot") {
    console.log('Bot Help command Used');
  message.channel.send({embed: {
  color: 700000,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Bot",
  description: config.version,
  fields: [{
      name: "Bot",
      value: prefix[message.author.id] + "prefix \n" + prefix[message.author.id] + "invite \n" +  prefix[message.author.id] + "server \n" + prefix[message.author.id] + "ping"
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Mod Bot"
  }
}
});
}
  else if(command === "set") {

    const sayMessage = args.join(" ");
    if(sayMessage === "report channel") {
      if (message.member.hasPermission("ADMINISTRATOR")) {
        const fs = require("fs");
        const report = require('./report.json'); // path may vary
        const ID = message.guild.id; // or set it as the mentioned user's ID, etc.
        report[ID] = message.channel.id;
        fs.writeFileSync('./report.json', JSON.stringify(report));
        message.channel.send("I Had Just Set Your Report Channel Here!")
      } else (message.channel.send("You Don't Have `ADMINISTRATOR` Permissions!"))

    } else {
      return message.channel.send("You Can Set Up These :\nreport channel")
    }

  }
// HELP /|\    |   OTHER
//      |    \|/
  else if(command === "yeet") {
    const pic = `https://i.kym-cdn.com/photos/images/newsfeed/001/610/396/66e.jpg`;
    const user = message.mentions.users.first();
    if (user === undefined) {
      return message.channel.send("Who You Gonna Yeet!?")
    }

    message.channel.send("LMAO, " + message.author + " Just Yeeted " + user + "!!!")
    message.channel.send({file: pic})
  }
  else if(command === "kill") {

    const user = message.mentions.users.first();
  if (user === undefined) {
    return message.channel.send("Who You Gonna Kill!?")
  }

    message.channel.send(message.author + " Has Killed " + user)
  }
  else if(command === "report") {
    const report = require('./report.json'); // path may vary
    const ID = message.guild.id; // or set it as the mentioned user's ID, etc.
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    fs.writeFileSync('./report.json', JSON.stringify(report));

    if (report[message.guild.id] == null){
      message.channel.send("Something Went Wrong, It May Not Be Set Up, Have A Admin Or Modorator To Use `set report channel`")
        }
    const sentMessageReporter = await client.channels.get(report[ID]).send(message.author + "Sent This Report")
    const sentMessage = await client.channels.get(report[ID]).send({embed: {
    color: 700000,
    author: {
      name: client.user.username,
    },
    title: "Report",
    description: sayMessage,
    footer: {
      timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "Report"
    }}});
    message.channel.send("Report Done, Thank You " + message.author + ", Staff Will Get To It Soon")
  }
  else if(command === "dank"){
    message.channel.send("normie");
  }
  else if(command === "panik"){
    message.channel.send("kalm");
  }
  else if(command === "creeper"){
    message.channel.send("AWW MAN");
  }
  else if(command === "quiz"){
message.channel.send("***Get Ready For This Quiz, You Get 10 Seconds***");
setTimeout(function(){
  const quiz = require('./quiz.json');
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };

  message.channel.send(item.question).then(() => {
    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
      .then(collected => {

        const paid = getRandomInt(15, 40);
        const fs = require("fs");
        const money = require('./money.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
        if (money[ID] == null){
        money[ID] = 0;
        }
        money[ID] += paid;
        fs.writeFileSync('./money.json', JSON.stringify(money));

        message.channel.send(`__*You Win!*__ \nTake `+ paid + `$ As A Reward!`);
      })
      .catch(collected => {
        message.channel.send('Your Out! <:laff:713422650256523358>');
      });
  });
}, 5000);

      }
  else if(command === "simon"){
message.channel.send("***Do As simon Say's. If simon Doesn't Say simon Say's, Say No***");
setTimeout(function(){
  const siamon = require('./simon.json');
  const item = siamon[Math.floor(Math.random() * siamon.length)];
  const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };

  message.channel.send(item.question).then(() => {
    message.channel.awaitMessages(filter, { maxMatches: 1, time: 5000, errors: ['time'] })
      .then(collected => {

        const paid = getRandomInt(5, 20);
        const fs = require("fs");
        const money = require('./money.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
        if (money[ID] == null){
        money[ID] = 0;
        }
        money[ID] += paid;
        fs.writeFileSync('./money.json', JSON.stringify(money));

        message.channel.send(`__*You Win!*__ \nTake `+ paid + `$ As A Reward!`);
      })
      .catch(collected => {
        message.channel.send('Your Out! <:laff:713422650256523358>');
      });
  });
}, 3000);

      }
  else if(command === "prefix") {
    const fs = require("fs");
    const prefix = require('./prefix.json'); // path may vary
    const ID = message.author.id; // or set it as the mentioned user's ID, etc.
    if (prefix[ID] == null){
    prefix[ID] = "..";
    }
    const sayMessage = args.join(" ");
    if (!args.length) {
        return message.channel.send(`You didn't provide a prefix! <:Sad:708659513237962753>`);
      }

      prefix[ID] = sayMessage;
      fs.writeFileSync('./prefix.json', JSON.stringify(prefix));
      message.channel.send("**YES MASTER**! It's Now `" + sayMessage + "`")
    }
  else if(command === "suggest") {
    const sayMessage = args.join(" ");
    if (!args.length) {
    		return message.channel.send(`You didn't provide any text! <:angry:713422454688710717>`);
    	}
    const sentMessage = await client.channels.get(`706695817766895666`).send({embed: {
    color: 700000,
    author: {
      name: client.user.username,
    },
    title: "Suggestion",
    description: sayMessage,
    footer: {
      timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "Suggestion"
    }
  }});
    message.react('👍');
    sentMessage.react('👍').then(sentMessage.react('👎'))
    message.channel.send("To vote for a suggestion, join my server. It should just be ..server!")
  }
  else if(command === "worm") {
    var worms = ["https://cdn.mos.cms.futurecdn.net/i4JxeGNM2xGnSQUCSSDEoe-1200-80.jpg","https://images.immediate.co.uk/production/volatile/sites/4/2018/08/GettyImages-122005156-1-b592543.jpg?quality=90&crop=8px%2C71px%2C1185px%2C510px&resize=960%2C408","https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/2/8/0/1330823-1-eng-GB/Global-packaging-waste-worm-banks_wrbm_large.jpg","https://images.immediate.co.uk/production/volatile/sites/4/2018/10/GettyImages-699171497-9e1c029.jpg?quality=90&resize=960%2C408"]
    var worm = Math.floor(Math.random() * worms.length);
    message.channel.send(worms[worm])
  }
  else if(command === "dog") {
    var dogs = ["https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg","https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg","https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg","https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg","https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841__340.jpg","https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518__340.jpg","https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494__340.png","https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267__340.jpg","https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg","https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281__340.jpg","https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374__340.jpg","https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760__340.jpg","https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025__340.jpg","https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647__340.jpg","https://cdn.pixabay.com/photo/2013/07/07/04/58/weimaraner-143753__340.jpg"];
    var dog = Math.floor(Math.random() * dogs.length);
    message.channel.send(dogs[dog])
  }
  else if(command === "invite") {
    message.channel.send({embed: {
        color: 3447003,
        title: "Click here to invite me",
        url: "https://discord.com/oauth2/authorize?client_id=706557876117962853&scope=bot&permissions=8",
        description: "Thank you for inviting me",
      }
    });  }
  else if(command === "server") {
      message.channel.send({embed: {
          color: 3447003,
          title: "Click here to join my server",
          url: "https://discord.gg/gMwJ6Fy",
          description: "Thank you for joining my server!",
        }
      });  }
  else if(command === "site") {
        message.channel.send({embed: {
            color: 3447003,
            title: "Click here to see my site",
            url: "https://discord.com/app",
            description: "There is none yet",
          }
        });  }
  else if(command === "loop") {
    var loops = ["https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossal3opt1.gif","https://media3.giphy.com/media/l0Iy4cguQsSZzhSj6/source.gif","https://i1.wp.com/www.mobymotionblog.com/wp-content/uploads/2015/08/ezgif-974324390.gif?resize=960%2C540","https://media3.giphy.com/media/lqLaoE25bLyCYnjLVh/source.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqPG2SeiMRI_lfLRFLQaWpC5tIP0q10t0LE_0TA3QbLlcNCV_Y&usqp=CAU","https://i1.wp.com/www.mobymotionblog.com/wp-content/uploads/2015/08/ezgif-1999099727.gif?resize=960%2C540"];
    var loop =  Math.floor(Math.random() * loops.length);
     message.channel.send(loops[loop])

  }
  else if(command === "meme") {
    var memes = ["https://i.imgflip.com/3ytbyu.jpg","https://i.imgflip.com/3ziywb.jpg","https://i.imgflip.com/3zgdhv.jpg","https://i.imgflip.com/3ztazm.jpg","https://i.imgflip.com/3ywybn.jpg","https://i.imgflip.com/3yjutg.jpg","https://i.imgflip.com/3zsgyk.jpg","https://i.imgflip.com/3zsh18.jpg","https://i.imgflip.com/3y8qw9.jpg","https://i.imgflip.com/3ztpp9.jpg","https://i.imgflip.com/3zambu.jpg","https://i.imgflip.com/3zlb25.jpg","https://i.imgflip.com/3zkwwr.jpg","https://i.imgflip.com/3zsnji.jpg","https://i.imgflip.com/3zk6s5.jpg","https://i.imgflip.com/3y7l9h.jpg","https://i.imgflip.com/3y8j94.jpg","https://i.imgflip.com/3y7iih.jpg","https://i.imgflip.com/3zlct8.jpg","https://i.imgflip.com/3zb31z.jpg","https://i.imgflip.com/3zciif.jpg","https://i.imgflip.com/3zsnji.jpg","https://i.imgflip.com/40r3ic.jpg","https://i.imgflip.com/40juld.jpg","https://i.imgflip.com/40e6wp.jpg","https://i.imgflip.com/40jkuu.jpg","https://i.imgflip.com/405z37.jpg","https://i.imgflip.com/40inb5.jpg","https://i.imgflip.com/40ew2s.jpg","https://i.imgflip.com/40e77o.jpg","https://i.imgflip.com/40dmpf.jpg","https://i.imgflip.com/40gq9r.jpg","https://i.imgflip.com/40gpm4.jpg","https://i.imgflip.com/40e3qe.jpg","https://i.imgflip.com/40r1ja.jpg","https://i.imgflip.com/40cqrb.jpg","https://i.imgflip.com/3oh5o7.jpg","https://i.imgflip.com/4054r2.jpg","https://i.imgflip.com/40dqlx.jpg","https://i.imgflip.com/3zyzn8.jpg","https://i.imgflip.com/40ebbs.jpg","https://i.imgflip.com/40io7h.jpg","https://i.imgflip.com/3zzlcz.jpg","https://i.imgflip.com/3zxo5s.jpg","https://i.imgflip.com/40akbj.jpg","https://i.imgflip.com/4006kf.jpg","https://i.imgflip.com/40hjld.jpg","https://i.imgflip.com/3zyklp.jpg"];
    var meme = Math.floor(Math.random() * memes.length);
    message.channel.send({file: memes[meme]})
  }
  else if(command === "neon") {
    if (!args.length) {
    		return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
    	}
      const sayMessage = args.join("+");
      message.delete().catch(O_o=>{});
    message.channel.send('Neon \n https://flamingtext.com/net-fu/proxy_form.cgi?script=neon-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');

        }
  else if(command === "fire") {
    if (!args.length) {
        return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
      }
      const sayMessage = args.join("+");
      message.delete().catch(O_o=>{});
    message.channel.send('fire \n https://flamingtext.com/net-fu/proxy_form.cgi?script=fire-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
              }
  else if(command === "gold") {
    if (!args.length) {
    		return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
    	}
      const sayMessage = args.join("+");
      message.delete().catch(O_o=>{});
    message.channel.send('gold \n https://flamingtext.com/net-fu/proxy_form.cgi?script=winner-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
                          }
  else if(command === "gloss") {
    if (!args.length) {
    		return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
    	}
const sayMessage = args.join("+");
message.delete().catch(O_o=>{});
message.channel.send('gloss \n https://flamingtext.com/net-fu/proxy_form.cgi?script=glossy-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
                                                  }
  else if(command === "silver") {
    if (!args.length) {
        return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
      }
      const sayMessage = args.join("+");
      message.delete().catch(O_o=>{});
    message.channel.send('silver \n https://flamingtext.com/net-fu/proxy_form.cgi?script=silver-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
  }
  else if(command === "steel") {
    if (!args.length) {
        return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
      }
      const sayMessage = args.join("+");
      message.delete().catch(O_o=>{});
    message.channel.send('steel \n https://flamingtext.com/net-fu/proxy_form.cgi?script=steel-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
                          }
  else if(command === "inferno") {
    if (!args.length) {
        return message.channel.send(`You didn't provide any text! <:sad:713422841223053413>`);
      }
    const sayMessage = args.join("+");
    message.delete().catch(O_o=>{});
    message.channel.send('inferno \n https://flamingtext.com/net-fu/proxy_form.cgi?script=inferno-logo&text='+sayMessage+'+&_loc=generate&imageoutput=true');
              }
  else if(command === "hi") {
    var facts = ["Hi", "Hello", "No", "Yes", "WHAT!"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
  }
  else if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  else if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
  else if(command === "kick") {
    // Easy way to get member object though mentions.
       var member= message.mentions.members.first();
       // Kick
       member.kick().then((member) => {
           // Successmessage
           message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
       }).catch(() => {
            // Failmessage
           message.channel.send("Access Denied");
       });
  }
  else if(command === "ban") {
    // Easy way to get member object though mentions.
       var member= message.mentions.members.first();
       // Kick
       member.ban().then((member) => {
           // Successmessage
           message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
       }).catch(() => {
            // Failmessage
           message.channel.send("Access Denied");
       });
  }
  else if(command === "clear") {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
               message.channel.fetchMessages()
                  .then(function(list){
                       message.channel.bulkDelete(list);
                   }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
           }

  }
  else if(command === "avatar") {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);}
    // ECONOMY THINGS BELLOW
  else if(command === "use") {

    const sayMessage = args.join(" ");

      if(sayMessage === "candy") {
        const candy = require('./candy.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
        if (candy[ID] == null){
        candy[ID] = 0;
        }
        fs.writeFileSync('./candy.json', JSON.stringify(candy));

        if(candy[ID] > 0) {
          candy[ID] -= 1;
          message.channel.send("🍬 As You Eat Your Candy, You Start To Drool Over That Beautiful Taste \n kinda nasty ngl")
        } else {message.channel.send("How U Gonna Eat Candy, Without The Candy Part?!")}
      } else if(sayMessage === "iphone") {
        const num = getRandomInt(1, 4)
        const iphone = require('./iphone.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
        if (iphone[ID] == null){
        iphone[ID] = 0;
        }
        fs.writeFileSync('./iphone.json', JSON.stringify(iphone));

        if(iphone[ID] > 0) {
message.channel.send("Hold On To This IPhone, It's Not UseFull Yet, Just Wait!")
//          message.channel.send("Say Something To Send To The Developers")
//          const filter = m => m.content.includes(' ');
//  const collector = message.channel.createMessageCollector(filter, { time: 15000 });
//  collector.on('collect', m => {
//    return message.channel.send(`I Got *${m.content}*, i will send that to the dev's`);
//  });
//
//  collector.on('end', collected => {
//  	console.log(`Collected ${collected.size} items`);
//  });

          } else {message.channel.send("How U Gonna Use, **WHATCHA AIN'T GOT!**")}
        }
      else { message.channel.send("How You Gonna Use What Don't Exist!")}
}
  else if(command === "inv") {
    const money = require('./money.json'); // path may vary
    const candy = require('./candy.json'); // path may vary
    const ID = message.author.id; // or set it as the mentioned user's ID, etc.
    if (candy[ID] == null){
    candy[ID] = 0;
    }
    fs.writeFileSync('./candy.json', JSON.stringify(candy));

    message.channel.send({embed: {
    color: 700000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Inv",
    description: config.version,
    fields: [{
        name: "Inv",
        value: "🍬 Candy : " + candy[ID]
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Mod Bot"
    }
  }
  })
  }
  else if(command === "buy") {
      const sayMessage = args.join(" ");
      if(sayMessage === "candy") {
        const fs = require("fs");
        const money = require('./money.json'); // path may vary
        const candy = require('./candy.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
        if (candy[ID] == null){
        candy[ID] = 0;
        }
          if (money[ID] > 50) {
            candy[ID] += 1;
            money[ID] -= 50;
            message.channel.send("🍬 PURCHASE : 1 Candy For 50$ \n You Now Have " + money[ID] + "\n Whew, Thats Exspensive")
          } else  (message.channel.send("Your Broke, Go To Work!"))
        fs.writeFileSync('./candy.json', JSON.stringify(candy));
      } else   if(sayMessage === "iphone") {
          const fs = require("fs");
          const money = require('./money.json'); // path may vary
          const iphone = require('./iphone.json'); // path may vary
          const ID = message.author.id; // or set it as the mentioned user's ID, etc.
          if (iphone[ID] == null){
          iphone[ID] = 0;
          }
            if (money[ID] > 300) {
              iphone[ID] += 1;
              money[ID] -= 300;
              message.channel.send("📱 PURCHASE : 1 iphone For 300$ \n You Now Have " + money[ID] + "$\n Better Use That iPhone Good At That Price")
            } else  (message.channel.send("Your Broke, Go To Work!"))
          fs.writeFileSync('./iphone.json', JSON.stringify(iphone));
        } else { message.channel.send("Do We Have That?, Its Not In My Shelfs??")}
  }
  else if(command === "shop") {
    message.channel.send({embed: {
    color: 700000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Shop",
    description: config.version,
    fields: [{
        name: "Candy",
        value: "🍬 Candy - 50$"
      },
      {
          name: "Knife",
          value: "🔪 Candy - 100$"
        },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Mod Bot"
    }
  }
  })
  }
  else if(command === "work") {

    if (talkedRecently.has(message.author.id)) {
               message.channel.send("Wait 30 minutes before going to work again! <:angry:713422454688710717> - " + message.author);
       } else {

         const paid = getRandomInt(50, 150);
         const fs = require("fs");
         const money = require('./money.json'); // path may vary
         const ID = message.author.id; // or set it as the mentioned user's ID, etc.
         if (money[ID] == null){
         money[ID] = 0;
         }
         money[ID] += paid;
         fs.writeFileSync('./money.json', JSON.stringify(money));
         message.channel.send("After A Day Of Work, You Made " + paid + "$")
       }
              // the user can type the command ... your command code goes here :)

           // Adds the user to the set so that they can't talk for a minute
           talkedRecently.add(message.author.id);
           setTimeout(() => {
             // Removes the user from the set after a minute
             talkedRecently.delete(message.author.id);
           }, 1800000);
       }
  else if(command === "beg") {

   if (talkedRecently.has(message.author.id)) {
              message.channel.send("Wait 1 begging you big baby! <:angry:713422454688710717> - " + message.author);
      } else {

        const paid = getRandomInt(0, 5);
        const fs = require("fs");
        const money = require('./money.json'); // path may vary
        const ID = message.author.id; // or set it as the mentioned user's ID, etc.
      if (money[ID] == null){
        money[ID] = 0;
        }
        money[ID] += paid;
        fs.writeFileSync('./money.json', JSON.stringify(money));
        message.channel.send("You, Being A Baby, Begged And Got " + paid + "$")
      }
             // the user can type the command ... your command code goes here :)

          // Adds the user to the set so that they can't talk for a minute
          talkedRecently.add(message.author.id);
          setTimeout(() => {
            // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
          }, 60000);
            }
  else if(command === "balance") {
    const fs = require("fs");
    const money = require('./money.json'); // path may vary
    const ID = message.author.id; // or set it as the mentioned user's ID, etc.
    if (money[ID] == null){
    money[ID] = 0;
    }
    message.channel.send('You Have : ' + money[ID] + '$');


  }
  else {
    const sayMessage = args.join(" ");
    message.channel.send("Thats Not A Valid Command, Try `help`")
    const sentMessage = await client.channels.get(`713857439673614387`).send("Some One Used Unknown Command : " + command + " " + sayMessage)
    console.log("Some One Used Unknown Command : " + command + " " + sayMessage)

  }
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
});


client.login(config.token);
