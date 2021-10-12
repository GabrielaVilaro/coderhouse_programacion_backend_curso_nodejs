/* Desarrollar una herramienta que permita llevar cuentas a las personas:

1) Definir clase Contador
2) Cada instancia debe ser identificada con el nombre del resposable
3) Cada instancia inicia su cuenta en cero
4) La clase debe llevar un valor estárico en cero
5) Definir un método que devuelva el nombre del Resposable  
6) Definir un método que retorne la cuenta individual
7) Definir un método que retorne la cuenta global 
8) Definir un metodo contar que incremente en uno las dos cuentas */

class Contador {
    constructor({responsable}){
        this.contador = 0;
        this.responsable = responsable

    }
    
    static num = 0;

    acumulador(){
        this.contador += x;
        Contador.num += x;

    }

    obtenerResponsable(){
        return `${this.responsable}`;
    }

    obtenerCuentaIndividual(){
        return this.contador;

    }

    obtenerCuentaGlobal(){
        return Contador.num;
    }

    contar(){
        this.contador +=1;
        Contador.num += 1;
    }
}


let dataFirstUser = {
    responsable: "Gabriela",
    contador: 0
}

let dataSecondUser = {
    responsable: "Lola",
    contador: 0
}

let gabriela = new Contador(dataFirstUser);
console.log(gabriela.obtenerResponsable());
gabriela.acumulador(2);
console.log(gabriela.obtenerCuentaIndividual());

gabriela.contar();

let lola = new Contador(dataSecondUser);
console.log(lola.obtenerResponsable());
lola.acumulador(1);
console.log(lola.obtenerCuentaIndividual());
console.log(lola.obtenerCuentaGlobal());

lola.contar();
