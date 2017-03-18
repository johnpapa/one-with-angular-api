module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const customers = [
        { id: 1, name: 'John', city: 'Orlando' },
        { id: 2, name: 'Peggy', city: 'New York' },
        { id: 3, name: 'Julie', city: 'Seattle' }
    ];

    // if (req.query.name || (req.body && req.body.name)) {
    if (req.query && req.query.id) {
        const id = parseInt(req.query.id);
        const customer = customers.filter(c => c.id === id);
        // context.log(req.query.id);
        res = {
            // status: 200, /* Defaults to 200 */
            body: customer
        };
    }
    else {
        res = {
            // status: 200, /* Defaults to 200 */
            body: customers
        };
        // res = {
        //     status: 400,
        //     body: "Please pass a name on the query string or in the request body"
        // };
    }
    context.done(null, res);
};
