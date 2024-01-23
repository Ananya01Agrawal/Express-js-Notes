const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("<h1> welcome to my home page</h1>");
}
);
// if we want to send the multiple then we have to use the write
app.get("/about", (req, res) => {
    res.write("<h1> welcome to my about page</h1>");
    res.write("<h1> welcome to my about page</h1>");
    res.send();
}
);
//making the nav available to all the pages
// making the about page
app.get('/about', (req, res) => {
    res.status(200).send('Hello World from about page');
});
app.get('/contact', (req, res) => {
    res.send('Hello World from contact page');
});
//passing the json data
app.get('/temp', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Ananya'
        },
        {
            id: 2,
            name: 'Ananya'
        }
    ]);
});
// The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON, but if we write res.send() then it will not convert the non-objects.

app.get('/temp', (req, res) => {
    res.send('Hello World from temp page');
});

app.listen(3000, () => console.log('Listening on port 3000...'));

const nav = [
    {
        link: '/books', name: 'Books'
    },
    {
        link: '/authors', name: 'Authors'
    }
];