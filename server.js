//express server
const express = require('express')
const cors = require('cors')

// const connectDb = require('./dbConn.js')
const connectDb = require('./db.js')

//import user model
const UserModel = require('./models/users.js')

const app = express()

connectDb()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// '/' path
app.get('/', (req, res) => {
  res.send('Server is working!!')
})

//get => fetch data/ read the data
// app.get('/list-users', (req, res) => {
//   UserModel.find({})
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//   res.status(200).send({
//     success: true,
//     data: users,
//   })
// })

app.get('/list-users', async (req, res) => {
  try {
    const users = await UserModel.find({})
    // console.log(data)
    res.status(200).json({
      success: true,
      data: users,
    })
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      success: false,
    })
  }
})

//find user by id
app.get('/list-users/:id', async (req, res) => {
  const id = req.params.id
  // console.log(id)
  try {
    // const user = await UserModel.find({ _id: id })
    const user = await UserModel.findById(id)
    //.select({ name: 1 })

    res.status(200).json({
      success: true,
      data: [user],
    })
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      success: false,
    })
  }
})

app.get('/list-users/name/:name', async (req, res) => {
  const name = req.params.name
  console.log(name)
  try {
    const user = await UserModel.find({ name: new RegExp(name, 'i') })
    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
    })
  }
})

//post => create data / write data
app.post('/create-user', async (req, res) => {
  try {
    const user = await UserModel.create({
      name: req.body.name,
      age: req.body.age,
    })

    // const user = new UserModel()
    // user.name = req.body.name
    // user.age = req.body.age

    // const res = await user.save()

    res.status(201).json({
      success: true,
      data: [user],
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    })
  }
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}, http://localhost:${PORT}`)
  // mongoose
  //   .connect(uri)
  //   .then(() => console.log('Connected to DB successfully'))
  //   .catch((err) => console.log(err.toString()))
})
