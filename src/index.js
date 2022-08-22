const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const Route = require('./routes/index');
const db = require('./config/db/index');
var methodOverride = require('method-override');
const port = 3000;

//connect to DB
db.Connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
// Templte engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
Route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
