const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = new express();
// const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
app.get('/cool', (req, res) => res.send(cool()))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get("/", function (request, response) {
    response.sendFile('/public/index.html', {root: __dirname});
});

function openDrawerMenu(){
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar"){
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}
