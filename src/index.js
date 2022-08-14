const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const Route = require('./routes/index');
const port = 3000;
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Templte engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
                    app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
Route(              app);

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
});
