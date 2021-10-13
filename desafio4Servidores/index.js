/* Consigna: Realizar un proyecto de servidor basado en node.js que utilice express e implementar los siguientes
endpoints en el puerto 8080:
a) Ruta get '/productos' que devuelva todos los productos
b) Ruta get '/productoRandom' que devuelva un producto al azar
Incluir un archivo de texto 'productos.txt' y usar la clase Contenedor del desafío anterior para acceder
a los datos persistidos */

const fs = require('fs')
const express = require('express');
let app = express();
let filepath = '../archivos/productos.txt';
const Contenedor = require('./Contenedor.js');
const manejadorArchivo = new Contenedor(filepath);
const PORT = 8080;

app.get('/productos', (req, res) => {
    const productos = manejadorArchivo.getAll();
    res.send(productos)
})
app.get('/productoRandom', (req, res) => {
    const productosRandom = manejadorArchivo.getAll();
    const array = JSON.parse(productosRandom);
    res.json(array[Math.floor(Math.random() * array.length)])
})

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ' + PORT);
});