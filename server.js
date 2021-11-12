const express = require('express');
const app = express();


app.get('/greeting/:name', (req, res) => {
 res.send("Hi " + req.params.name
 +  ", It's so great to see you")
});


app.get('/tip/:total/:tipPercentage', (req, res) => {
 res.send([Number(req.params.total) * (Number(req.params.tipPercentage) / 100)]);
});








app.listen(3000);