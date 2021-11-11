const express = require('express');
const app = express();


app.get('/greeting/:name', (req, res) => {
 res.send("Hi " + req.params.name
 +  ", It's so great to see you")
});











app.listen(3000);