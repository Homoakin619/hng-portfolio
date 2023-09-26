const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');

const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")))
app.use

app.set("views",path.join(__dirname,"views"));
app.set("view engine","html")
nunjucks.configure("views",{
    autoescape:true,express:app
})

app.use("/",(req,res) => {
  res.render("index")
})
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
