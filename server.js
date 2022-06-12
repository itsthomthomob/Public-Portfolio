// import dependencies
const express = require('express');

// make an instance of the express object
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

console.log("Preparing server...");

// configures the app to handle a POST data in json
router.use(express.json());

// Serve up static assets (usually on heroku), thanks to "Shakhor" on StackOverflow
if (process.env.NODE_ENV === 'production') {

  // For path directories
  const path = require('path');

  // Exprees will serve up production assets
  app.use(express.static(path.resolve(__dirname, "./build"))); // path.resolve was missing here

  app.get("/", (req, res) =>
      res.sendFile(path.resolve(__dirname, "./build", "index.html"))
  );
}

// Route API paths
const contactPath = require('./API/ContactAPI.js')
router.use('/api/ContactAPI', contactPath);

// app uses the router
app.use(router);

// Listen on PORT for http requests, configured for Heroku
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});