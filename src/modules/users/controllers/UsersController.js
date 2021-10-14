const users = require("../schemas/user.js");
const ListAllUsersService = require('../services/ListAllUsersService');
const ListByAgeUsersService = require('../services/ListByAgeUsersService');

async function findAll(req, res) {
    const items = await ListAllUsersService.execute();

    return res.send({ items });
}

async function findFilter (req, res) {
    const idade = req.query.age;
    
    const listUsersAge = await ListByAgeUsersService.execute(idade);

    return res.json({ items: listUsersAge });
}

module.exports = { findAll, findFilter };