const express = require('express')
const store = require('store2')
const app = express()
const port = 3000

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Create a home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Art Museum'
  });
})

app.get('/stap1', (req, res) => {
  res.render('stap1', {
    title: 'Art Museum',
    test: store('Test1')
  })
})

app.post('/stap2', (req, res) => {
  store('Test1', {name: req.body.name_field});
  res.render('stap2', {
    title: 'Art Museum',
    test: store('Test1')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})