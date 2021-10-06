/* 1) Declarar una clase usuario
   2) Agregarle los atributos Nombre, apellido, libros y mascotas
   3) Definir un método que retorne el nombre y appellido, otro que agrege una mascota al array, 
   uno que cuente la cantidad de mascotas, uno que agregue un libro y otro que los muestre todos */

class User {
    constructor({name, lastname, books, pets}) {
      this.name = name;
      this.lastname = lastname;
      this.books = books;
      this.pets = pets;
    }

    getFullName(){
        return `${this.name} ${this.lastname}`;
    }

    addPet(pet = 'Lola') {
        return this.pets.push(pet);
    }

    countPet(){
        return this.pets.length;
    }

    addBook(title, autor){

        return this.books.push({title, autor})

    }

    getBooks(){
        return this.books.map((x)=>
        {
            return x.title;
        });
    }

  }

  let data = {
      name: "Gabriela",
      lastname: "Vilaró",
      books: [
          {title: 'La vuelta al mundo en 80 días', autor: 'Julio Verne'},
          {title: 'El capital', autor: 'Marx'}
        ],
        pets: ["Perro", "Pez", "Hamster"]
  }

  let gabriela = new User(data);
  console.log(gabriela.getFullName());
  gabriela.addPet('Conejo');
  console.log(gabriela.countPet());
  gabriela.addBook('Clean Code', 'Robert C. Martin')
  console.log(gabriela.getBooks());