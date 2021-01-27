var { customers } = require('./data_tier/customers');
var {flowers} = require('./data_tier/flowers');
var {quizzes} = require('./data_tier/data');
var {scores} = require('./data_tier/scores');

let add = (n, m) => {
    return n + m;
};

let getCustomers = () => {
    return customers;
};

let addCustomer = (name, email, password) => {
    let alreadyExist = customers.find(x => x.email.toLowerCase() === email.toLowerCase());
    if(alreadyExist) {
        return true;
    }
    customers.push({id: customers.length + 1, name: name, email: email, password: password});
    return false;
};

let getFlowers = () => {
    let flowerL=[];
    for (var i = 0; i < flowers.length; i++) {
        flowerL.push(flowers[i].name);
    }
    return flowerL;
}


let getQuizs = () => {
    return quizzes;
}

let getQuizById = (id) => {
    for (var i = 0; i < quizzes.length; i++) {
        for(var j = 0; j < quizzes[i].length; j++){
            if(quizzes[i][j].name == id){
                return quizzes[i][j];
            }
        }
    }
}

let addScore = (quizTaker,quizId, score) => {
    scores.push({quizTaker,quizId,score});
}


let checkScore = (quiztaker,quizid) => {
    for (var i = 0; i < scores.length; i++) {
        if(scores[i].quizTaker == quiztaker && scores[i].quizId == quizId){
            console.log(scores[i].score);
            return scores[i].score;
        }
    }
    return "0";
}

exports.add = add;
exports.addCustomer = addCustomer;
exports.getCustomers = getCustomers;
exports.getFlowers = getFlowers;
exports.getQuizs = getQuizs;
exports.getQuizById = getQuizById;
exports.addScore = addScore;
exports.checkScore = checkScore;