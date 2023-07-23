const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000; 
const data = require('./data/chef.json');
app.use(cors());

// Route handler for GET request to '/'
app.get("/", (req, res) => {
  res.send("Hello, chefs!");
});

//get all the data
app.get("/chef",(req,res)=>{
    res.send(data);
})

//get specific data
app.get("/chef/:id",(req,res)=>{
    const id = req.params.id;
    const item = data[0]?.chefs?.find((ch=>ch.id == id));
    res.send({item});
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
