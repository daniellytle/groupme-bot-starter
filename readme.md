# GroupMe Bot Starter

Flexible starter code for a simple GroupMe bot.

![ Posting Gifs ](https://raw.githubusercontent.com/daniellytle/groupme-bot-starter/master/gif.example.gif)

## Overview

Node.js server to interact with the GroupMe Bot API. This project is setup to post automated messages as well as respond to messages with inspirational quotes and gifs from giphy. 

### Requirements

* Node.js
* Registered GroupMe Bot
* Hosting (Heroku, Digital Ocean) - *Needed to listen for messages*

## Setup

#### Create GroupMe Bot

https://dev.groupme.com/bots/new

Set GroupMe Callback Url to `<YOUR_IP>/new-message`. Then setup `config.js` file with your bot's info.

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

You'll be able to post messages to the Group running locally, but you'll need to host the bot publicly to receive message posts. 

[Heroku](www.heroku.com) is great for hosting small apps and offers free plans. If you have the *Github Student Developer Pack*, you can use your free tokens on [Digital Ocean ](www.digitalocean.com) to host your bot.

Wherever you have your bot, first download the node packages.
```
$ npm install
```

Then start the server, sudo is needed to listen on *port 80*.
```
$ sudo node server.js
```

I recommend checking out `npm forever` to make your bot crash with grace.

## Features and Structure

#### Automatic Jobs

Schedule posts from your bot from the weather to a normal morning greeting. Look in `cron.js` to schedule new jobs.

#### Tagged Responses

When a message contains your bot's tag-name, you can respond with any content. Check out `content.js` and `routes.js` to handle these messages.

#### Examples

**Giphy Search**

Using the Giphy API, your bot can post funny gifs when requested.

![ Posting Gifs ](https://raw.githubusercontent.com/daniellytle/groupme-bot-starter/master/gif.example.gif)

**Inspirational Quotes**

Start your day with schedule quote or get one on demand!

![ Posting Quotes ](https://raw.githubusercontent.com/daniellytle/groupme-bot-starter/master/inspire.example.gif)

### Add your own!


