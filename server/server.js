const express = require('express');
const app = express()
const cors = require('cors');
const bodyparser = require('body-parser');

const port = process.env.PORT || 8000;

// app.use(cors)
app.use(bodyparser.json());

app.listen(port, () => console.log(`listening on port ${port}`))


