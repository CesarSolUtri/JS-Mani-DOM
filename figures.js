//const ladoCuadrado = 5;
console.log("");



function perimetroCuadrado (lado) {
    return lado * 4;
} 
//console.log("");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return ((base * altura) / 2);
}

function calcularDiametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;
console.log(PI);

function calcularPerimetroCirculo(radio){
    const diametro = calcularDiametroCirculo(radio);
    return diametro * PI;
}

function calcularAreaCirculo (){
    return ((radio * radio) *PI);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = calcularPerimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = calcularPerimetroCirculo(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = calcularPerimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaTriangulo (){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const input2 = document.getElementById("InputCTriangulo2");
    const value2 = input.value2;
    const altura = calcularAlturaTriangulo(value, value2);
    const area = (altura * value) /2
}

function calcularAlturaTriangulo(base, lado1){
    return (Math.sqrt(Math.pow(lado1,2)-(Math.pow(base,2)/4))); 
}


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}