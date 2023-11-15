var express = require("express");//This line imports the Express.js library, which is a web application framework for Node.js.


var router = express.Router();//This line creates a new router object.

router.get("/", function (req, res, next) {//This line defines a route handler for HTTP GET request to the root path (/).when a get request is made to this url ,the function is called
  res.send("Api is working properly");//This line sends the string "Api is working properly" as the response.
});

module.exports = router;//This line exports the router object so that it can be used by other parts of the application by importing it using require().
