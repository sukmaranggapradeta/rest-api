const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const todosRoute = require(`./routes/todo`)
const signUpRoute = require('./routes/signUp')
const signInRoute = require('./routes/signIn')


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use(`/api/todos`, todosRoute)
app.use('/api/signup', signUpRoute)
app.use('/api/signin', signInRoute)

app.listen(PORT, ()=>{
    console.log(`running at ${PORT}`)
})