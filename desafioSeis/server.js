const express = require("express");
const router = express.Router();
const app = express();
const PORT = 8080;
const productRoutes = require("./routes/routes");
const path = require('path');
const pug = require('pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productRoutes);

app.set('views', './views');
app.set('view engine', 'pug');

app.use("/api/nuevo-producto", express.static(path.join(__dirname,"views")));

router.get('/', (req, res) => {
  res.sendFile(path.resolve("../views/nuevo-producto.html"));
})

app.listen(PORT, () => {
  console.log('El servidor esta corriendo en el puerto: ' + PORT);
});