module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', request);
    const Rebel = require('../models/rebel');
    let response = { };

    const rebels = [
        new Rebel(10, 'Jyn Erso', 1),
        new Rebel(11, 'Cassian Andor', 2),
        new Rebel(12, 'K-2SO', 3),
        new Rebel(13, 'Saw Gererra', 4),
        new Rebel(14, 'Chirrut Îmwe', 5),
        new Rebel(15, 'Baze Malbus', 5),
        new Rebel(16, 'Bodhi Rook', 5),
        new Rebel(17, 'Mon Mothma', 6),
        new Rebel(18, 'Galen Erso', 7),
        new Rebel(19, 'Bail Organa', 8),
        new Rebel(20, 'Leia Organa', 8),
        new Rebel(21, 'Lyra Erso', 9)
    ];

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
