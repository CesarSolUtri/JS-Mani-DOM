//const precioOriginal = 100;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    //const inputDiscount = document.getElementById("InputDiscount");
    //const discountValue = inputDiscount.value;

    //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const couponDiscount = document.getElementById("InputCoupon");
    const couponValue = couponDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

    let descuento;

    //Podemos usar un switch como validación, pero también podemos usar else if
   /* switch(couponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 20;
        break;
        case coupons[2]:
            descuento = 30;
        break;

    }*/

    //Aqui está con el ejemplo de Else if
    //Pero como cambiamos de un arreglo a un arreglo de objectos esta función y validación no funcionaría
    //Por eso, en vez de usar el .includes, usaremos el .find

    /*if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "cesar_chido") {
        descuento = 15;
     } else if (couponValue === "awebo") {
        descuento = 30;
     } else if (couponValue === "esta_aprendiendo_a_programar") {
        descuento = 25;
     }

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}*/

//Podemos usar Arrays para almacenar nuestros cupones, pero tambiénn podemos usar objetos o en este caso array de objetos
/*const coupons = [
    "cesar_chido",
    "awebo",
    "esta_aprendiendo_a_programar"
]*/

//Objeto de array de objeto de cupones
const coupons = [
    {
        name: "cesar_chido",
        discount: 15,
    },
    {
        name: "awebo",
        discount: 25,

    },
    {
        name: "esta_aprendiendo_a_programar",
        discount: 30,

    }
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/