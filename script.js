
const ordem = {
    alfabetica: ['Espanha', 'Belgica', 'Alemanha', 'Dourados', 'Camisão'],
    alfa: function () {
        this.alfabetica.sort();
        console.log(this.alfabetica);
    }
};
ordem.alfa();

const remov = {
    numeros: [3, 7, 0, 5, 9],
    remover: function () {
        this.numeros.pop();

        console.log(this.numeros);
    }
};

remov.remover();
   
const array = {
    numerosUm: [8, 5, 2, 6, 0],
    numerosDois: [4, 2, 9, 9,],
    metodo: function () {
        this.numerosUm.push(...this.numerosDois);
        this.numerosUm.sort();
        this.numerosDois.sort();
        console.log(this.numerosUm);
    }
};
array.metodo()

const desordem = {
    bagunca: ['Alemanha','Belgica' ,'Camisão','Dourados','Espanha'],
    desordemAlfa: function () {
        this.bagunca.reverse();
        console.log(this.bagunca);
    }
};
desordem.desordemAlfa();
