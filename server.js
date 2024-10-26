// Importing Express

const express = require("express")

// Invoking Express

const app = express()

// EX 1 Greet the user

app.get("/greetings/:name", (req, res) => {
  res.send(
    `Hello there, ${req.params.name}! What a delight it is to see you once more.`
  )
})

// EX 2 Rolling a dice

app.get("/roll/:number", (req, res) => {
  const number = req.params.number
  if (!isNaN(number)) {
    const randNum = Math.floor(Math.random() * number)
    res.send(`You rolled a ${randNum}`)
  } else {
    res.send(`You must specify a number. `)
  }
})

// EX 3 I Want THAT One!

// Data

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
]

// Code

app.get("/collectibles/:index", (req, res) => {
  const index = req.params.index
  const collectible = collectibles[index]
  res.send(
    `So, you want the ${collectible.name}?  For $${collectible.price}, it can be yours!`
  )
})

// EX 4  Filter Shoes by Query Parameters

// Data
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
]

// Code

app.get("/shoes", (req, res) => {
  const minPrice = req.query.minPrice
  const maxPrice = req.query.maxPrice
  const shoeType = req.query.type

  let filteredShoes = shoes

  //   shoes.forEach(shoe => {

  // });

  if (minPrice !== undefined) {
    filteredShoes = shoes.filter((shoe) => shoes.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice)
  }

  if (shoeType !== undefined) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === shoeType)
  }

  res.send(`Name: ${shoes.name}, Price: $${shoes.price}, Type: ${shoes.type}`)
})
// listen to requests on port 3000
app.listen(3000, () => {
  console.log("listening to port 3000")
})
