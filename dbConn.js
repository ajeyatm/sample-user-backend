const mongoose = require('mongoose')
const uri =
  'mongodb+srv://<username>:<password>@cluster1.8zotn.mongodb.net/users?retryWrites=true&w=majority'

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

const connectDb = () => {
  mongoose
    .connect(uri, options)
    .then(() => console.log('Connected to DB successfully'))
    .catch((err) => console.log(err.toString()))
}

module.exports = connectDb
