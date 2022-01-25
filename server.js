// import modules

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as todoDB from './data/todo-db.js'
// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)


// Mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res){
    res.send('Time to do this thing')
})

app.get('/party', function(req, res) {
    res.send('This is my party')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/todos', function(req, res) {
    todoDB.find({}, function (error, todos) {
        res.render('todos/index', {
            todos: todos,
            error: error,
        })
    })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})