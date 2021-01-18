const { request, response } = require('express');
const express = require('express');
const cors = require('cors');
const api = require('./api');

const application = express();
const port = process.env.PORT || 4002;
application.use(cors());

application.use(express.json());


application.get('/add/:n/:m', (request, response) => {
    let n = Number(request.params.n);
    let m = Number(request.params.m);
    let sum = api.add(n, m);
    response.send(`${n} + ${m} = ${sum}.`);
});

application.get('/customers', (request, response) => {
    response.json(api.getCustomers());
});

application.get('/flowers', (request, response) => {
    response.json(api.getFlowers());
});

application.post('/register', (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    let alreadyExist = api.addCustomer(name, email, password);
    if(alreadyExist) {
        response.status(403).json({message: 'A Customer with the same email already exists.'});
    } else {
        response.json({message: 'The customer added successfully'});
    }
});



application.listen(port, () => console.log('Listening on port ' + port));