module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', request);

    let rebels = require('../data/rebels');
    let response = { };

    if (request.query && request.query.id) {
        const id = parseInt(request.query.id);
        const rebel = rebels.filter(c => c.id === id);
        response = {
            body: rebel
        };
    }
    else {
        response = {
            body: rebels
        };
    }
    context.done(null, response);
};
