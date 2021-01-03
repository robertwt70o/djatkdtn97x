const { request, response } = require('express');
const express = require('express');
const api = require('./api');

const application = express();
const port = process.env.PORT || 4002;


application.get('/add/:n/:m', (request, response) => {
    let n = Number(request.params.n);
    let m = Number(request.params.m);
    let sum = api.add(n, m);

    response.send(`${n} + ${m} = ${sum}.`);
});

application.post('/register', (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    api.addCustomer(name, email, password);
    response.json({message: 'The customer added successfully'});
});



application.listen(port, () => console.log('Listening on port ' + port));