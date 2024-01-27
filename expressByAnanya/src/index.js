const express = require('express');
const path = require('path');

const app = express();
const hbs = require('hbs');
const port = 8000;
//built in middleware
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
//app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Ananya",
    });
    });

app.get("/", (req, res) => {
    res.render("about");
}
);
//usage of '*' for 404 error page is to be used at the end of all the routes
app.get('*', (req, res) => {
    res.render('404error', {
        errorcomment: 'Oops! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});