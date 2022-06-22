var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Customer = require('./api/models/customerModel'); //created customer model loading here
  Employee = require('./api/models/employeeModel'); //created employee model loading here
  const cors = require("cors");
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/phoenix_db', { useNewUrlParser: true, useUnifiedTopology: true }); 

// this replaces the bodyParser method
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
var routes = require('./api/routes/challengeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Phoenix (GrowFlow Challenge) API server running on port:' + port);
