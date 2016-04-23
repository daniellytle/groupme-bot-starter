# GroupMe Bot Starter

Flexible starter code for a simple GroupMe bot.

## Overview

Node.js server to interact with the GroupMe Bot API. This project is setup to post automated messages as well as respond to messages with inspirational quotes and gifs from giphy. 

### Requirements

* Node.js
* Registered GroupMe Bot
* Hosting (Heroku, Digital Ocean)

## Setup

#### Create GroupMe Bot

https://dev.groupme.com/bots/new

Setup config file with bot info. 

**botTagName** is what you'll use to call out your bot in messages. Can be any string.
**callbackUrl** is the url that GroupMe will post to when a new message is posted in your group.

```javascript
// config.js
module.exports = {
	
	apiUrl: 'https://api.groupme.com/v3/bots/post',
	callbackUrl: '<CALLBACK_URL>',
	botId: '<YOUR_BOT_ID>',
	botTagName: '<YOUR_BOT_TAGNAME>'

}
```

#### Web Server

You'll be able to post messages to the Group running locally, but you'll need to host the bot publicly to receieve message posts. 

[Heroku](www.heroku.com) is great for hosting small apps and offers free plans. If you have the *Github Student Developer Pack*, you can use your free tokens on [Digital Ocean](www.digitalocean.com) to host your bot.

Wherever you have your bot, first download the node packages.
```
$ npm install
```

Then start the server, sudo is needed to listen on *port 80*.
```
$ sudo npm install
```

I recommend checking out `npm forever` to make your bot crash with grace.

## Features and Structure

#### Automatic Jobs

Schedule posts from your bot from the weather to a normal morning greating. Look in `cron.js` to schedule new jobs.

#### Tagged Responses**

When a message contains your bot's tagname, you can respond with any content. Check out `content.js` and `routes.js` to handle these messages.

#### Examples

**Giphy Search**

![Posting Gifs](https://raw.githubusercontent.com/daniellytle/groupme-bot-starter/master/gif.example.gif)

**Inspirational Quotes**

![](https://raw.githubusercontent.com/daniellytle/groupme-bot-starter/master/quote.example.gif)


