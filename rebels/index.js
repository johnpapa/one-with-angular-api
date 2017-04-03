module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', req);
    let res = { };

    const rebels = [
        { id: 1, name: 'John', city: 'Orlando' },
        { id: 2, name: 'Peggy', city: 'New York' },
        { id: 3, name: 'Julie', city: 'Seattle' },
        { id: 4, name: 'Brian', city: 'New York' }
    ];

    if (req.query && req.query.id) {
        const id = parseInt(req.query.id);
        const rebel = rebels.filter(c => c.id === id);
        res = {
            body: rebel
        };
    }
    else {
        res = {
            body: rebels
        };
    }
    context.done(null, res);
};
