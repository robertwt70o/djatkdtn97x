var { customers } = require('./data_tier/customers');

let add = (n, m) => {
    return n + m;
};

let addCustomer = (name, email, password) => {
    customers.push({id: customers.length + 1, name: name, email: email, password: password});
};

exports.add = add;
exports.addCustomer = addCustomer;