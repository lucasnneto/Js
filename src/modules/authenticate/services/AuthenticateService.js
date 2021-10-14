const users = require("../../users/schemas/user");
const jwt = require('jsonwebtoken');

async function execute({ email, password }){
    const user = await users.findOne({ email });
    if( !user ) throw Error("Usuário ou senha não encontrado.");

    if( user.password !== password ) throw Error("Usuário ou senha não encontrado.");

    const token = jwt.sign({ 
        idUser: user._id,
        name: user.name,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1h"
      });

    return { user: { name: user.name, email: user.email }, token };
}

module.exports = { execute };