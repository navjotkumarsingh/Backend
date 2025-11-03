const express =  require('express') // Importing the module

const app = express() // Object creation

const port = 3000

// define the route for the get requests

app.get('/', (req,res)=>{
    res.send("Hello! This is express")
})

// Start the server

app.listen(port, () =>{
    console.log("Server is running...🚀");
})

