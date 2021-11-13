const express = require('express');
const app = express();

//Greetings

app.get('/greeting/:name', (req, res) => {
 res.send("Hi " + req.params.name
 +  ", It's so great to see you")
});

//Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
 res.send([Number(req.params.total) * (Number(req.params.tipPercentage) / 100)]);
});

///Magic 8 Ball
const words = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


 

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    
    res.send(`<h3>Wiil I be Millionaire</h3> <br /> <h1>${words[Math.floor(Math.random() * 21)]}</h1>`)
})

//Take one Down and Pass it Around

app.get('/', (req, res) => {
    let beer = 99;
    
    res.send(`<h1>${beer} Bottles on  the wall</h1> <br /> <a href="/${beer - 1}">take one down, pass it around</a>`)
    
});


app.get('/:number_of_bottles', (req, res) => {
    if(req.params.number_of_bottles > 0) {  
     res.send(`<h1>${req.params.number_of_bottles} Bottles on the wall</h1> <br /> <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
    } else if (req.params.number_of_bottles == 1) {
        res.send(`<h1>${req.params.number_of_bottles} Bottle on the wall</h1> <br /> <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
    }else {
    res.send(`<h1> No more Bottle left on the wall</h1> <br /> <a href="/">Click it for renew the game</a> `);      
}
})

// //Fibonacci
// const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]
 
// for (let x in numbers) {
//     let prev 
//     app.get('/fibonacci/:fibNum', (req, res) => {
//     if(req.params.fibNum == ((prev) + (preprev))) {
//     res.send(`<h2>Very good. It is Fibonacci</h2>`)
//     // }else {
//     //     res.send(`<h2>I can tell this is not a fibonacci number </h2>`)
//     }  
// })
// }
app.listen(3000);