const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
    setInterval(() => {
        console.log("Job task running")
    }, 1000)
    console.log(`Server is running on port ${port}`);
});