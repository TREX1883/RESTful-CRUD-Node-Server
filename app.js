import express from 'express'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()










mongoose
  .connect(
    `mongodb+srv://daniel:Dragon35!@cluster0-taek1.mongodb.net/test?retryWrites=true&w=majority`,
  )
  .then(result => {
    app.listen(port, () => {
      console.log(
        `Server is running on port ${port}`
      )
    })
  })
  .catch(err => console.log(err))