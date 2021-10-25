const express = require("express");
const app = express();
const PORT = 8080;
const productRoutes = require("./routes/routes");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productRoutes);
app.use("/web", express.static(path.join(__dirname,"views")));


app.listen(PORT, () => {
  console.log('El servidor esta corriendo en el puerto: ' + PORT);
});