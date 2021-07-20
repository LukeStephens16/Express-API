const express = require('express');
const apiRouter = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use('/api', apiRouter);


app.listen(3000);