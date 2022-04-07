import express from "express"
import fs from "fs"
const app = express()
const port = process.env.PORT || 5000

// Link the templating engine to the express app
app.set("view engine", "ejs")

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set("views", "views")

// Tell express to use a 'static' folder
app.use(express.static("static"))
app.use(express.urlencoded({ extended: true }))

// Create a home route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Art Museum",
  })
})

app.get("/stap1", (req, res) => {
  res.render("stap1", {
    title: "Art Museum",
  })
})

let color
let text
let size

const readableColor = (color) => {
  if (color === "#EE4B2B") {
    color = "Rood"
  }
  if (color === "#05B8CC") {
    color = "Blauw"
  }
  if (color === "#FFBF00") {
    color = "Geel"
  }
  if (color === "#454B1B") {
    color = "Groen"
  }
  if (color === "#000") {
    color = "Zwart"
  }
  return color
}

app.post("/stap2", (req, res) => {
  color = req.body.color
  text = req.body.text
  size = req.body.size

  res.render("stap2", {
    title: "Art Museum",
    color: color,
    text: text,
    size: size,
    readableColor: readableColor(color),
  })
})

app.post("/stap3", (req, res) => {
  const shirtData = {
    size: size,
    color: color,
    text: text,
    name: req.body.name,
    phone: req.body.number,
    email: req.body.email,
  }

  const allShirts = JSON.parse(fs.readFileSync("bourne.json"))

  // Statement if order is wrong
  // if (
  //   shirtData.size !== undefined &&
  //   shirtData.color !== undefined &&
  //   shirtData.text !== undefined
  // ) {
  //   allShirts.shirts.push(shirtData)
  // } else {
  //   const error = "error"

  //   res.render("/", {
  //     error: error,
  //   })
  // }

  allShirts.shirts.push(shirtData)

  const stringData = JSON.stringify(allShirts, null, 2)
  fs.writeFileSync("bourne.json", stringData)

  res.render("stap3", {
    title: "Art Museum",
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    color: color,
    text: text,
    size: size,
    readableColor: readableColor(color),
  })
})

app.get("/allebestellingen", (req, res) => {
  const allOrders = JSON.parse(fs.readFileSync("bourne.json"))

  res.render("allebestellingen", {
    title: "Art Museum",
    allOrders: allOrders.shirts,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
