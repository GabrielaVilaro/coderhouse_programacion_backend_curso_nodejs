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
