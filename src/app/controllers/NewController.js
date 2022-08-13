class NewController {
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send(`hello ${req.params.slug}`)
    }


}

module.exports = new NewController