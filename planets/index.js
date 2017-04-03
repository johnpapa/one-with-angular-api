module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', request);
    const Planet = require('../models/planet');
    let response = { };

    const planets = [
        new Planet(1, 'Vallt'),
        new Planet(2, 'Fest'),
        new Planet(3, 'Vulpter'),
        new Planet(4, 'Onderon'),
        new Planet(5, 'Jedha'),
        new Planet(6, 'Chandrila'),
        new Planet(7, 'Grange'),
        new Planet(8, 'Alderaan'),
        new Planet(9, 'Aria Prime')
    ];

    if (request.query && request.query.id) {
        const id = parseInt(request.query.id);
        const planet = planets.filter(c => c.id === id);
        response = {
            body: planet
        };
    }
    else {
        response = {
            body: planets
        };
    }
    context.done(null, response);
};
