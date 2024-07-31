const express = require("express");
const cors = require("cors");
const {sequelize} = require('./database/index')
const userRoutes = require('./router/userrouter'); // Adjust the path as needed
const categoriesRoutes = require('./router/categoriesrouter'); 
const cartRouter= require("./router/CartRouter")

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());



app.use('/users', userRoutes);

app.use('/categories', categoriesRoutes);

app.use('/carts',cartRouter)

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});