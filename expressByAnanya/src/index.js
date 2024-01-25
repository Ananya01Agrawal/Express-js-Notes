const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
//built in middleware
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);

app.use(express.static(staticPath));
//app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Ananya",
    });
    });

app.get("/", (req, res) => {
    res.send("<h1> welcome to my home page</h1>");
}
);
app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});