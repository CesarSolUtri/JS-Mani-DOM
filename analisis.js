//Utility - Helper methods
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promediosLista = sumaLista / lista.length;
    return promediosLista;
  }

//Calcular SalarioCol

const salarioCol = colombia.map(
    function (personita){
        return personita.salary;
    }
)

const salarioColSorted = salarioCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;


    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}



const medianaGeneralCol = medianaSalarios(salarioColSorted);


//Mediana del top 10%


const spliceStart = (salarioColSorted.length * 90)/100;
const spliceCount = salarioColSorted.length - spliceStart;
const salarios1ColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarios1ColTop10);
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
