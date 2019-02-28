# Severino
Severino’s a `discord.js` based bot which usage is:

- receive a `!bot TOKEN` message
- if `TOKEN` matches with a custom token previously generated, user who said it will be granted a specific role.

----


For now, `TOKEN` can only be set previously and every single `TOKEN` can be used infinite times.

Please let the following message on the `!bot info` command.

```js
client.on('message', function(message){

  if(message.content == '!bot info')
  {
    return message.reply("`BotName`'s a **`discord.js`** bot based on `Severino` by @Guedes#0001"
    )
  }
});
```

Usage:
```bash
$ node index.js
```
