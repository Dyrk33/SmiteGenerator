const express = require('express');

const app = express();


app.use(express.static('../SmiteGenerator'));
app.listen(3000);
