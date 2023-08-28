
const desordem = {
    bagunca: ['Alemanha','Belgica' ,'Camisão','Dourados','Espanha'],
    desordemAlfa: function () {
        this.bagunca.reverse();
        console.log(this.bagunca);
    }
};
desordem.desordemAlfa();

const array = {
    numerosUm: [3, 7, 1, 5, 9],
    numerosDois: [2, 8, 6, 4,],
    metodo: function () {
        this.numerosUm.push(...this.numerosDois);
        this.numerosUm.sort();
        this.numerosDois.sort();
        console.log(this.numerosUm);
    }
};
array.metodo

const remov = {
    numeros: [3, 7, 0, 5, 9],
    remover: function () {
        this.numeros.pop();

        console.log(this.numeros);
    }
};

remov.remover();