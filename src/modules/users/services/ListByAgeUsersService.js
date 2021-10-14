const users = require("../schemas/user.js");

async function execute(idade){
    const listUsersByAge = await users.find({ age: { $gte: idade } });

    return listUsersByAge;
}

module.exports = { execute };