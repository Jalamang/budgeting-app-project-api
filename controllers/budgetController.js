const express = require("express");
const { uuid } = require('uuidv4');



const budgetArray = require("../models/Transaction");


console.log(uuid());
const transactions = express.Router();

transactions.get("/", (request, response) => {
   
    if(budgetArray.length > 0){
        response.status(200).json(budgetArray)
    } else {
        response.status({error: "Data couldn't be fetched!"}) 
      }
})


//Querying
transactions.get("/:id", (request, response) => {
    const { id } = request.params;
    
    console.log("Received a GET HTTP method: /transactions/index");
    {
        budgetArray[id]
        ? response.json(budgetArray[id])
        : response.redirect("/*");
    }
  });



  //creating
  transactions.post("/", (request, response) => {
    console.log("Received a POST HTTP method: /transactions");
    console.log(request)
    request.body.amount = Number(request.body.amount);
    budgetArray.push(request.body);
   
    budgetArray[budgetArray.length - 1].id = uuid()
    
    response.status(201).json(budgetArray);
  });


// deleting
transactions.delete("/:id", (request, response) => {
  console.log("Received a DELETE HTTP method /transactions/:id");
    const { id } = request.params;
    const  [ deletedItem ]  = budgetArray.splice(id, 1);
    response.status(200).json(deletedItem);
  });


  // updating
transactions.put("/:id", (request, response) => {
  console.log("Received a PUT HTTP method /:id/edit");
    const { id } = request.params
    console.log(request.body.amount);
    budgetArray[id] = request.body;
   
    budgetArray[id].amount = Number(request.body.amount);
    response.status(200).json(budgetArray[id])
  })

module.exports = transactions;


