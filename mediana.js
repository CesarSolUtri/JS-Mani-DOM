const lista1 = [100, 200, 300, 100000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promediosLista = sumaLista / lista.length;
  return promediosLista;
}

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1Elemento2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
  ]);
  mediana = promedioElemento1Elemento2;
} else {
  mediana = lista1[mitadLista1];
}

function calcularMediana(listaMediana) {
  const sortedList = listaMediana.sort((a, b) => a - b);
  
  const mitadLista1 = parseInt(sortedList.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(sortedList.length)) {
    const elemento1 = sortedList[mitadLista1 - 1];
    const elemento2 = sortedList[mitadLista1];

    const promedioElemento1Elemento2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    mediana = promedioElemento1Elemento2;
  } else {
    mediana = listaMediana[mitadLista1];
  }
}
