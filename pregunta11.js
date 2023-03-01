var array = [];
var checks = document.querySelectorAll('.datoInput');
var arrayOrder = [];
var maximo = 0;
var ids = [];
var boton = document.getElementById('boton');

var id111Check = document.getElementById('check111');
var id211Check = document.getElementById('check211');
var id311Check = document.getElementById('check311');
var id411Check = document.getElementById('check411');
var id511Check = document.getElementById('check511');
var id611Check = document.getElementById('check611');

boton.addEventListener('click', catchData,  false);

function catchData(array) {

    array = [];
    checks.forEach((e) => {
        if (e.checked == true) {
            array.push(e.value);
        }
    });

    if(id111Check.checked){
        let textGastro = 'Restaurantes y bares';
        ids.push(textGastro);
    }

    if(id211Check.checked){
        let textAstro = 'Astroturismo';
        ids.push(textAstro);
    }

    if(id311Check.checked){
        let textHisto = 'Obras de teatro | Conciertos';
        ids.push(textHisto);
    }

    if(id411Check.checked){
        let textWell = 'Retiros espirituales';
        ids.push(textWell);
    }

    if(id511Check.checked){
        let textWell = 'Paseos en barco | Cruceros | Sunsets';
        ids.push(textWell);
    }

    if(id611Check.checked){
        let textGastro = 'Autopreparación de productos (aceite de oliva, vino, etc.)';
        ids.push(textGastro);
    }

    console.log(ids);
    sessionStorage.setItem('p11', JSON.stringify(ids));

    arrayOrder = array.sort();
    var became = sessionStorage.setItem('pregunta11', JSON.stringify(arrayOrder));
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

    window.location.href = "index-pregunta12.html";

};

checkbox1 = document.getElementById('check111')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
checkbox2 = document.getElementById('check211')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
checkbox3 = document.getElementById('check311')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
checkbox4 = document.getElementById('check411')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});
checkbox5 = document.getElementById('check511')
checkbox5.checked = eval(window.sessionStorage.getItem(checkbox5.id))

checkbox5.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox5.id, checkbox5.checked)
});
checkbox6 = document.getElementById('check611')
checkbox6.checked = eval(window.sessionStorage.getItem(checkbox6.id))

checkbox6.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox6.id, checkbox6.checked)
});