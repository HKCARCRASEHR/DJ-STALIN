const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Stalin is still alive!'));

app.listen(port, () => console.log(`Stalin is listening to http://localhost:${port}`));