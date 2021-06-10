require('dotenv').config()

const productsData = require("./data/products")
const connectDB = require("./config/db")
const Product = require('./models/Product')

connectDB()

const inportData = async () => {
  try {
    await Product.deleteMany({})
    await Product.insertMany(productsData)
    console.log('data inported success')
    process.exit()
  }catch (err) {
    console.error("Error wit data import ")
    process.exit(1)
  }
}

inportData()