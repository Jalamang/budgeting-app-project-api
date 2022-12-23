const express = require('express');

const budgetControllers = require('./controllers/budgetController')



const index = express();
const cors = require("cors")

index.use(cors())
index.use(express.json())

index.use('/transactions', budgetControllers)



index.get("/", (request, response) => {
    response.send("Budgeting App Project");
  });


index.get('*', (request, response) =>{
  console.log('GET request to *')
response
.status(404)
.json({Error: 'Page not found!'})
})

  module.exports = index;