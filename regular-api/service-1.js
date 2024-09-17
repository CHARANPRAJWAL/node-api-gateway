const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Main API Home Service 1');
});

app.get('/service1', (req, res) => {
    res.json({ message: 'This is Service 1' });
});


const port = 3000;
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
