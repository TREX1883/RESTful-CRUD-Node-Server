const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


let port = process.env.PORT
if (port == null || port == ''){
    port = 8080
} 


mongoose
  // .connect('mongodb+srv://daniel:Abcd1234!@cluster0-taek1.mongodb.net/test?retryWrites=true&w=majority')
  .connect('mongodb+srv://daniel:Dragon35!@cluster0-taek1.mongodb.net/test?retryWrites=true&w=majority')
  .then(result => {
    app.listen(port, () => {
      console.log(
        `Server is running on port ${port}`
      )
    })
  })
  .catch(err => console.log(err))
// 1-27-20 1.00:59