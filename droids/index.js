module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const droids = [
        { id: 1, name: 'BB8' },
        { id: 2, name: 'K2S0' },
        { id: 3, name: 'C3PO' },
        { id: 4, name: 'R2D2' }
    ];

    if (req.query && req.query.id) {
        const id = parseInt(req.query.id);
        const droid = droids.filter(d => d.id === id);
        res = {
            body: droid
        };
    }
    else {
        res = {
            body: droids
        };
    }
    context.done(null, res);
};
