const users = require("../schemas/user.js");

async function execute(){
    const listUsers = await users.find();

    return listUsers;
}

module.exports = { execute };