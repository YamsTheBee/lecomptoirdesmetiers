import express from "express"
import cors from "cors"

import dataEmplois from "./data/dataEmplois.js"

const app = express()

app.get('/', (req, res) => {
  res.json('je suis dans le /')
})

app.get('/emplois', (req, res) => {
  res.json(dataEmplois)
})

app.listen(4242, console.log('http://localhost:4242'))