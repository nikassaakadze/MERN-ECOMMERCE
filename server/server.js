require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productsRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoute')

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use('/user', userRoutes)

app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));