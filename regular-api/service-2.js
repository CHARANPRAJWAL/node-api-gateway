const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Main API Home Service 2');
});


app.get('/service2', (req, res) => {
    res.json({ message: 'This is Service 2' });
});

const port = 3001;
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
