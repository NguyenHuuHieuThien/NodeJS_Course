const newRoute = require('./new');
const homeRoute = require('./home');
const detailRoute = require('./course');
const meRoute = require('./me');

function Route(app) {
    app.use('/', homeRoute);
    app.use('/courses', detailRoute);
    app.use('/me', meRoute);
    app.use('/news', newRoute);

    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    // app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.send('')
    // })
}

module.exports = Route;
