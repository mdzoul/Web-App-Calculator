const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({extended: true})) //To access form data

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send(`The result of the calculation is ${result}.`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    var wt = parseFloat(req.body.wt);
    var ht = parseFloat(req.body.ht);

    var bmiResult = wt / Math.pow(ht, 2);

    res.send(`Your BMI is ${bmiResult.toFixed(1)}.`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});