var array = [];
var checks = document.querySelectorAll('.datoInput');
var arrayOrder = [];
var maximo = 0;
var ids = [];
var boton = document.getElementById('boton');

var id112Check = document.getElementById('check112');
var id212Check = document.getElementById('check212');
var id312Check = document.getElementById('check312');
var id412Check = document.getElementById('check412');
var id512Check = document.getElementById('check512');
var id612Check = document.getElementById('check612');

boton.addEventListener('click', catchData,  false);

function catchData(array) {

    array = [];
    checks.forEach((e) => {
        if (e.checked == true) {
            array.push(e.value);
        }
    });

    if(id112Check.checked){
        let textWell = 'Parques y santuarios naturales';
        ids.push(textWell);
    }

    if(id212Check.checked){
        let textOut = 'Actividades acuáticas';
        ids.push(textOut);
    }

    if(id312Check.checked){
        let textGastro = 'Clases de cocina local';
        ids.push(textGastro);
    }

    if(id412Check.checked){
        let textHisto = 'Actividades artesanales';
        ids.push(textHisto);
    }

    if(id512Check.checked){
        let textWell = 'Masajes relajantes y tratamientos';
        ids.push(textWell);
    }

    if(id612Check.checked){
        let textHisto = 'Museos y exposiciones';
        ids.push(textHisto);
    }

    console.log(ids);
    sessionStorage.setItem('p12', JSON.stringify(ids));

    arrayOrder = array.sort();
    var became = sessionStorage.setItem('pregunta12', JSON.stringify(arrayOrder));
    console.log(became);

    let unicoElemento = [];
    let vecesRepetido = [];
    let contador = 1;

    for (let i = 0; i < arrayOrder.length; i++) {
        if (arrayOrder[i + 1] === arrayOrder[i]) {
            console.log("Se repite: " + arrayOrder[i]);
            contador++;
        } else {
            unicoElemento.push(arrayOrder[i]);
            vecesRepetido.push(contador);
            contador = 1;
        }
    }
    console.log(unicoElemento);
    console.log(vecesRepetido);

    for (let j = 0; j < unicoElemento.length; j++) {
        console.log("El valor de " + unicoElemento[j] + " se repite " + vecesRepetido[j] + " veces.");
    }

    maximo = vecesRepetido.reduce(function (a, b) {
        return Math.max(a, b);
    });

    const masRepetido = ar => arrayOrder.reduce((acum, el, i, ar) => {
        const count = ar.filter(e => e == el).length;
        return count > acum[1] ? [el, count] : acum
    }, [" ", 0]);

    console.log("==============");
    console.log("El elemento que más número de veces se repite son: " + maximo + " veces.");
    console.log("El elemento que más se repite es: " + masRepetido(arrayOrder) + " veces.");

    window.location.href = "index-pregunta13.html";

};

checkbox1 = document.getElementById('check112')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
checkbox2 = document.getElementById('check212')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
checkbox3 = document.getElementById('check312')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
checkbox4 = document.getElementById('check412')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});
checkbox5 = document.getElementById('check512')
checkbox5.checked = eval(window.sessionStorage.getItem(checkbox5.id))

checkbox5.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox5.id, checkbox5.checked)
});
checkbox6 = document.getElementById('check612')
checkbox6.checked = eval(window.sessionStorage.getItem(checkbox6.id))

checkbox6.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox6.id, checkbox6.checked)
});