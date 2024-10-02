class Cuadrado {
    
    constructor(l1) {
        this.lado=l1
    }
    
    area(){
        return this.lado*this.lado
    }

    perimetro(){
        return this.lado*4
    }

}

module.exports = Cuadrado