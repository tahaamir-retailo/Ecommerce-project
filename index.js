const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const guestRouter=require('./routes/guestRoutes');
const userRouter=require('./routes/userRoutes');
const productRouter=require('./routes/productRoutes');
const jsonwebtoken = require("jsonwebtoken");
const Auth = require('./middlewares/auth');




const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection; //object
db.on('error', console.error.bind(console, 'connection error:')); //whenever an error, this handler
db.once('open', function() {
    console.log('MongoDB connected') // DB connected prompt
  // MongoDB connected!
});

app.use('/guest',guestRouter);
app.use('/user',userRouter);
app.use('/product',Auth,productRouter);
//add auth with product


app.listen(3000, () => {
  console.log('running successfully on port 3000');
})


