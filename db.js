const mongoose = require('mongoose')

const bdUrl =
  'mongodb+srv://ajeya123:ajeya123456@cluster0.ioubg.mongodb.net/userDB?retryWrites=true&w=majority'
//'mongodb+srv://denaarashmi:denaa123@cluster0.3ejl8.mongodb.net/userdb?retryWrites=true&w=majority'

function connectDb() {
  mongoose
    .connect(bdUrl)
    .then((conn) => {
      console.log(`Connected to DB Successfully`)
    })
    .catch((err) => console.log(`Error connecting DB`))
}

module.exports = connectDb
