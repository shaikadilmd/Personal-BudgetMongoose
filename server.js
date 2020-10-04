const express = require('express');
const loadData = require("./LoadData")
const app = express();
const port = 3000;

app.use('/',express.static('public'));


const budget = {
    myBudget: [

    {
        title: 'Eat out',
        budget: 45
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },

    ]
};


app.get('/hello',(req,res) => {
    res.send('Hello World!');
});

app.get('/budget',(req,res) => {
    res.json(loadData);
});

app.listen(port, () => {
    console.log('Example app listening at:+ http://localhost:${port}');
});