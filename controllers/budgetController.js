const express = require("express");

const budgetArray = require("../models/Transaction");


const transactions = express.Router();

transactions.get("/", (request, response) => {
    console.log("Received a GET HTTP method: /transactions");
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
        ? response.json(budgetArray[Number(id)])
        : response.redirect("/*");
    }
  });


  //creating
  transactions.post("/", (request, response) => {
    console.log("Received a POST HTTP method: /transactions");
    console.log(request)
    budgetArray.push(request.body);
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
    budgetArray[id] = request.body;
    response.status(200).json(budgetArray[id])
  })

  
module.exports = transactions;


