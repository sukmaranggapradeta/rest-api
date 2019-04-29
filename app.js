const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const todosRoute = require(`./routes/todo`)
const signUpRoute = require('./routes/signUp')
const signInRoute = require('./routes/signIn')


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use(`/api/todos`, todosRoute)
app.use('/api/signup', signUpRoute)
app.use('/api/signin', signInRoute)

app.listen(port, ()=>{
    console.log(`running at ${port}`)
})