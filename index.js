const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter=require('./routes/userRoutes');
const productRouter=require('./routes/productRoutes');
const jsonwebtoken = require("jsonwebtoken");
const AuthUser = require('./middlewares/authUser');
const cors=require('cors');
const AuthCart = require('./middlewares/authCart');
const cartRouter =require('./routes/cartRoutes');






const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection; //object
db.on('error', console.error.bind(console, 'connection error:')); //whenever an error, this handler
db.once('open', function() {
    console.log('MongoDB connected') // DB connected prompt
  // MongoDB connected!
});


app.use('/user',userRouter);
app.use('/product',AuthUser,productRouter);
app.use('/cart',AuthCart,cartRouter);



app.listen(3030, () => {
  console.log('running successfully on port 3030');
})


