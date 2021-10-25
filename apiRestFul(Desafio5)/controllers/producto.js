
let ARRAY_PRODUCTS = [];

class Product {
    constructor() {}

    postNewProduct (data) {
        if(data.title === "" || typeof data.title === "undefined") return false;
        if(data.price === "" || typeof data.price === "undefined") return false;
        data.id = ARRAY_PRODUCTS.length + 1;
        ARRAY_PRODUCTS.push({
            id: data.id,
            title: data.title,
            price: parseInt(data.price),
            thumbnail: data.thumbnail,
        });
        return true;
    }

    getAllProducts () {
        if (ARRAY_PRODUCTS.length<1) return false
        return ARRAY_PRODUCTS;
    }

    getProductById (id) {
        return ARRAY_PRODUCTS.filter( (producto) => producto.id === parseInt(id) )[0];
    }

    putProductById(id, data) {
        ARRAY_PRODUCTS = ARRAY_PRODUCTS.map( (producto) => {
            if ( producto.id === parseInt(id) ) {
                producto.title = data.title
                producto.price = parseInt(data.price)
            }
            return producto;
        });
        return true;
    }

    deletProductById(id) {
        ARRAY_PRODUCTS = ARRAY_PRODUCTS.filter((producto) => producto.id !== parseInt(id));
    }
}

module.exports = Product;