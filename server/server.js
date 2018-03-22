const express = require('express');
const path = require('path');
const projectRouter = require('./routers/project');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/project', projectRouter);

module.exports = app;
