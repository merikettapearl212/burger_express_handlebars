// Require the following npm packages inside of the server.js file:
//    * express
const express = require("express");
var exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});