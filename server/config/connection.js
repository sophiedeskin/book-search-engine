
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI 
   || 'mongodb+srv://sophiedeskin:Ags3225!@cluster0.aboxa.mongodb.net/googlebooks?retryWrites=true&w=majority'
  , 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    }
);

module.exports = mongoose.connection;
