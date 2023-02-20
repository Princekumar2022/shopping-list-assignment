const express = require('express');
const axios = require('axios');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());


mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://Prince-kumar-test:BNL9EDZIQikHdI2i@cluster0.wjcuv2x.mongodb.net/prince-22", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"), err => console.log(err))

app.use('/', route);


app.listen(PORT, function () {
    console.log('Express app running on port ' + PORT)
});