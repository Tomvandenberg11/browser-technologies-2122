import express from 'express'
import fs, {read} from 'fs'
const app = express()
const port = process.env.PORT || 5000

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

const readableColor = (color) => {
  if (color === '#EE4B2B') {
    color = 'Rood'
  }
  if (color === '#05B8CC') {
    color = 'Blauw'
  }
  if (color === '#FFBF00') {
    color = 'Geel'
  }
  if (color === '#454B1B') {
    color = 'Groen'
  }
  if (color === '#000') {
    color = 'Zwart'
  }
  return color
}

app.post('/stap2', (req, res) => {
  color = req.body.color
  text = req.body.text
  size = req.body.size

  res.render('stap2', {
    title: 'Art Museum',
    color: color,
    text: text,
    size: size,
    readableColor: readableColor(color)
  })
})

let userInput

app.post('/stap3', (req, res) => {
  let name = req.body.name
  let phone = req.body.number
  let email = req.body.email

  userInput = req.body
  let allResults = []

  try {
    const data = fs.readFileSync('bourne.json', 'utf8')

    allResults.push(userInput)

    fs.writeFile('bourne.json', JSON.stringify(allResults), 'utf8', cb => {
      console.log('werk ff')
    })

  } catch (err) {
    console.error(err)
  }

  res.render('stap3', {
    title: 'Art Museum',
    name: name,
    phone: phone,
    email: email,
    color: color,
    text: text,
    size: size,
    readableColor: readableColor(color)
  })
})

// app.get('/laatstebestelling', (req, res) => {
//   let allOrders
//   fs.readFile('bourne.json', 'utf-8', (err, data) => {
//     allOrders = JSON.parse(data)
//     console.log(allOrders)
//   })
//   res.render('allebestellingen', {
//     title: 'Art Museum',
//     allOrders: allOrders
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})