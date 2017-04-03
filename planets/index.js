module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', req);
    const Planet = require('../models/planet');
    let res = { };

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

    if (req.query && req.query.id) {
        const id = parseInt(req.query.id);
        const planet = planets.filter(c => c.id === id);
        res = {
            body: planet
        };
    }
    else {
        res = {
            body: planets
        };
    }
    context.done(null, res);
};
