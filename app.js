import express from 'express'
import fs from 'fs'
const app = express()
const port = process.env.PORT || 3000

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
    title: 'Art Museum',
  });
})

app.get('/stap1', (req, res) => {
  res.render('stap1', {
    title: 'Art Museum'
  })
})

let color
let text
let size

app.post('/stap2', (req, res) => {
  color = req.body.color
  text = req.body.text
  size = req.body.size

  res.render('stap2', {
    title: 'Art Museum',
    color: color,
    text: text,
    size: size,
  })
})

let userInput

app.post('/stap3', (req, res) => {
  let name = req.body.name
  let phone = req.body.phone
  let email = req.body.email

  userInput = req.body
  let allResults = []

  fs.readFile('informatie.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    if (data.length) {
      allResults.push(data)
    }

    allResults.push(userInput)
    console.log(allResults)

    fs.writeFile('informatie.json', JSON.stringify(allResults), 'utf8', cb => {
      console.log('werk ff')
    })
  })

  res.render('stap3', {
    title: 'Art Museum',
    name: name,
    phone: phone,
    email: email,
    color: color,
    size: size,
  })
})

app.get('/allebestellingen', (req, res) => {
  let allOrders
  fs.readFile('informatie.json', 'utf-8', (err, data) => {
    allOrders = JSON.parse(data)
    // console.log(allOrders)
  })

  res.render('allebestellingen', {
    title: 'Art Museum',
    allOrders: allOrders
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})