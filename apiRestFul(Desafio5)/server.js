const express = require("express");
const app = express();
const PORT = 8080;
const productRoutes = require("./routes/productos");
const viewRoutes = require('./routes/view');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/productos", productRoutes);

app.use("/web", viewRoutes);

app.listen(PORT, () => {
  console.log('El servidor esta corriendo en el puerto: ' + PORT);
});
server.on('error', err => console.log('Error message: ' + err));