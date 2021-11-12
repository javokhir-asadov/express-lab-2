const express = require('express');
const app = express();


app.get('/greeting/:name', (req, res) => {
 res.send("Hi " + req.params.name
 +  ", It's so great to see you")
});


app.get('/tip/:total/:tipPercentage', (req, res) => {
 res.send([Number(req.params.total) * (Number(req.params.tipPercentage) / 100)]);
});

const words = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


 console.log(words[2])

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    
    res.send(`<h3>Wiil I be Millionaire</h3> <br /> <h1>${words[Math.floor(Math.random() * 21)]}</h1>`)
})





app.listen(3000);