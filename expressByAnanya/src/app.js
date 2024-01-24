const express = require('express');
const app = express();

app.get('/about', (req, res) => {    
    res.send('Hello World from about page');
}
);


app.get('/', (req, res) => {
    res.send('Hello World');
});     // '/' is the root route                // req is the request object and res is the response object
// Thd callback function has 2 parameters, requst(req) and response(res).
// The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
// Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.
app.listen(3000, () => console.log('Listening on port 3000...'));
