const express = require('express');
const router = express.Router();
const Product = require("../controllers/producto");
const product = new Product();

let ARRAY_PRODUCTS = [];

router.get("/", (req, res) => {
    const products = product.getAllProducts()
    if (!products) {
      return res.status(404).json({
        error: "No se cargó ningún producto",
      });
    }
  
    res.json(products);
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const ProductNow = product.getProductById(id)
    if (ProductNow) {
      return res.json(ProductNow);
    }
    res.status(404).json({
      error: "Producto NO disponible",
    });
  });
  
  router.post("/", (req, res) => {
    const data = req.body;
    if(product.postNewProduct(data)) {
      if (data.form === "1") return res.redirect('http://localhost:8080/web');
      res.status(201).json(data);
    }
    res.status(400).send();
  });
  
  router.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    if(product.putProductById(id, data)) {
      res.status(201).json(data);
    }
    res.status(400).send();
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const productNow = product.getProductById(id);
    res.json(productNow);
    product.deletProductById(id);
  });

  module.exports = router;