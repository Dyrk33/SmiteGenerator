const express = require('express');

const app = express();

app.listen(80, (event) => {
    console.log('Listening on http://localhost');
});

app.use(express.static('../SmiteGenerator'));
