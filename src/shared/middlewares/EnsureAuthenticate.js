const { verify } = require('jsonwebtoken');

function ensureAuthenticate( request, response, next){
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            message: 'Token inválido.'
        });
    }

    const [, token] = authToken.split(" ");

    try {        
        const decode = verify(token, process.env.JWT_KEY);
        console.log(decode);

        return next();
    } catch (err) {
        return response.status(401).json({
            message: 'Token inválido.'
        });
    }
};

module.exports = ensureAuthenticate;