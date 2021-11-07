/* Consiga: Realizar un proyecto de servidor basado en nodejs y express que ofrezca una API RESTfull,
que incorpore las siguientes rutas:

1- GET 'api/productos' -> devuelve todos los productos
2- GET 'api/productos/:id' -> devuelve un producto según su id
3- POST 'api/productos' -> recibe y agrega un producto, devuelve su id
4- PUT 'api/productos:id' -> actualiza un producto según su id
5- DELETE 'api/productos:id' -> elimina un producto según su id*/


const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uuid } = require('uuidv4');

let ARRAY_PRODUCTS = [];

let storage = multer.diskStorage({
  destination: path.join(__dirname, './uploads/photos'),
  filename: (req, file, cb)=>{
      cb(null, `${uuid()}-${file.originalname}`);
  }
})
let midMulter = multer({
      storage,
      dest: path.join(__dirname, './uploads/photos'),
      limits:{fieldSize:1000000000}
  });

  router.get("/vista", (req, res) => {
    const products = ARRAY_PRODUCTS;
    res.render('main.pug', { active: "main", products: products });
  });

  router.post("/api/archivo", (req, res)=>{
    let {tipo} = req.params;
    router.use(midMulter.array("files"));
    console.log(req.file);
    let response = false;
    if(obj.hasOwnProperty(tipo)){
        response = obj[tipo].push(objAdd);
    if (data.form === "1") return res.redirect('http://localhost:8080/api/nuevo-producto');
    }
    res.json(obj[tipo]);
});

router.get("/", (req, res) => {
    const products = ARRAY_PRODUCTS;
    if (!products.length) {
      return res.status(404).json({
        error: "No se cargó ningún producto",
      });
    }
    res.json(products);
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const ProductNow = ARRAY_PRODUCTS.filter( (producto) => producto.id === parseInt(id) )[0];
    if (ProductNow) {
      return res.json(ProductNow);
    }
    res.status(404).json({
      error: "Producto NO disponible",
    });
  });
  
  router.post("/", (req, res) => {
    const data = req.body;
    const id = ARRAY_PRODUCTS.length + 1;
    const newProduct = 
    ARRAY_PRODUCTS.push({
        id: id,
        title: data.title,
        price: parseInt(data.price),
        file: data.file,
    });
    if(newProduct) {
      if (data.form === "1") return res.redirect('http://localhost:8080/api/nuevo-producto');
      res.status(201).json(data);
    }
    res.status(400).send();
  });
  
  router.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
     {
      ARRAY_PRODUCTS = ARRAY_PRODUCTS.map( (producto) => {
        if ( producto.id === parseInt(id) ) {
            producto.title = data.title
            producto.price = parseInt(data.price)
            res.status(201).json(data);
        }
        return producto;
    });
  }
});
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    ARRAY_PRODUCTS.filter( (producto) => producto.id === parseInt(id) )[0];
    res.status(200).json(ARRAY_PRODUCTS = ARRAY_PRODUCTS.filter((producto) => producto.id !== parseInt(id)));
  });

  module.exports = router;