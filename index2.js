class celular {

    constructor() {
        this.cor = "prata";
    }
    ligar() {
        console.log("Uma ligação");
        return "Ligando";
     }
}

let objeto = new celular();

console.log(objeto);
console.log(objeto.ligar());