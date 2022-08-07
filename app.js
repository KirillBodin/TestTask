const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {UserRoutes, PostNameEmailRoutes} = require('./routes')
const keys = require('./config/keys')
const app = express()
const process = require('process');

mongoose.connect(keys.mongoUri)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

process.on('unhandledRejection', error => {
    console.error('unhandledRejection', error);
});


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', PostNameEmailRoutes)
app.use('/api/users', UserRoutes)


module.exports = app