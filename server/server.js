const express = require('express');

const app = express();

app.listen(3000, (event) => {
    console.log('Listening on http://localhost');
});



app.use(express.static('../SmiteGenerator'));
