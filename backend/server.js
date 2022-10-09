const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/tasks', (req, res) => {
    res.status(200).send("Tasks");
});

app.listen(PORT, () => { console.log(`Server started on PORT: ${PORT}`) });