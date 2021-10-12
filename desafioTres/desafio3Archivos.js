/* Implementar una clase Contenedor de manejo de archivos, usar promesas, async, await, modulo fs.
1) Implementar el método Save, recibe un objeto, lo guarda en el archivo productos.txt
2) GetById, trae un producto por d
3) GetAll, devuelve todo lo del archivo
4) deletedById, borra según id del producto
5) deletedAll, borra el archivo */

const fs = require("fs");

class Contenedor {
    constructor() {
        this.filepath = './productos.txt'
    }

    async getAll () {

        try {
            const products = await fs.promises.readFile(this.filepath, 'utf-8')
            return JSON.parse(products);
        } catch (err) {
            return [];
        }
  
    }

    async deletedAll () {
        await fs.promises.unlink(this.filepath);
    }

    async save (title, price, thumbnail) {
        try {
            const products = await this.getAll()
            const newProduct = {
                title,
                price,
                thumbnail,
                id: products.length + 1,
            };
            products.push(newProduct);
            await fs.promises.writeFile(this.filepath, JSON.stringify(products, null, 2));
            return `Se agreró el producto ${title}`;
        } catch (err) {
            console.log('Ocurrió un error al intentar agregar el producto'. err);
        }

    }

    async getById(id){

        try{
            const productos = await this.getAll();
            return console.log("Se trae el producto por id: ", productos.find(o => o.id === id));
            
        } catch (err){
             console.log("Ocurrió un error!")
        }
     }

     async deletedById(id){

         try{
            const productos = await this.getAll();
            return console.log("Se elimina el producto por id: ", productos.splice(id));
            
        } catch (err){
             console.log("Ocurrió un error!")
        }

    }
}


const main = async () => {
    const manejadorDeArchivos = new Contenedor();
    console.log("Leer: ", await manejadorDeArchivos.getAll());
    console.log(await manejadorDeArchivos.save("Arroz", 100, "https://path/image-uno"));
    console.log(await manejadorDeArchivos.save("Yerba", 200, "https://path/image-dos"));
    console.log(await manejadorDeArchivos.save("Dulce", 300, "https://path/image-tres"));
    console.log("Leer: ", await manejadorDeArchivos.getAll());
    //console.log(await manejadorDeArchivos.getById(5));
    console.log(await manejadorDeArchivos.deletedById(2));

    // setTimeout( async () => {
    //     await manejadorDeArchivos.deletedAll();
    // }, 5000);
    
    // console.log("Leer: ", await manejadorDeArchivos.getAll());
}

main();