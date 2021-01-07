var { customers } = require('./data_tier/customers');

let add = (n, m) => {
    return n + m;
};

let addCustomer = (name, email, password) => {
    let alreadyExist = customers.find(x => x.email.toLowerCase() === email.toLowerCase());
    if(alreadyExist) {
        return true;
    }
    customers.push({id: customers.length + 1, name: name, email: email, password: password});
    return false;
};

exports.add = add;
exports.addCustomer = addCustomer;