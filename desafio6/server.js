const express = require("express");
const pug = require('pug');
const port = 8080;
const productRoutes = require("./routes/products");
const frontRoutes = require('./routes/view');
const app = express();
const path = require("path");
const cors = require("cors");

app.set('views', './views');
app.set('vista engine', 'pug');
app.use("/api/productos/view", express.static(path.join(__dirname,"views")));
app.use("/api/productos/view", express.static(path.join(__dirname,"uploads")));

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/productos", productRoutes);
app.use("/api/nuevo-producto", frontRoutes);

app.listen(port, () => {
  console.log('El servidor esta corriendo en el puerto: ' + port);
});
