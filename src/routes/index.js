const newRoute = require('./new');

function Route(app) {
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
