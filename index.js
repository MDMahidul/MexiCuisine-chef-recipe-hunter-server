const express = require("express");
const app = express();
const port = process.env.PORT || 5000; //use this port to run the app
const cors = require('cors')
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



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
