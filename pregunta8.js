var array = [];
var checks = document.querySelectorAll('.datoInput');
var arrayOrder = [];
var maximo = 0;
var ids = [];
var boton = document.getElementById('boton');

var id18Check = document.getElementById('check18');
var id28Check = document.getElementById('check28');
var id38Check = document.getElementById('check38');
var id48Check = document.getElementById('check48');
var id58Check = document.getElementById('check58');
var id68Check = document.getElementById('check68');

boton.addEventListener('click', catchData,  false);

function catchData(array) {

    array = [];
    checks.forEach((e) => {
        if (e.checked == true) {
            array.push(e.value);
        }
    });

    if(id18Check.checked){
        let textWell = 'Relajándote en un jacuzzi';
        ids.push(textWell);
    }

    if(id28Check.checked){
        let textOut = 'Disfrutando de la naturaleza';
        ids.push(textOut);
    }

    if(id38Check.checked){
        let textGastro = 'Comiendo en el restaurante de moda';
        ids.push(textGastro);
    }

    if(id48Check.checked){
        let textAstro = 'Observando las estrellas en la tranquilidad de la noche';
        ids.push(textAstro);
    }

    if(id58Check.checked){
        let textHisto = 'Visitando una plaza o monumento histórico';
        ids.push(textHisto);
    }

    if(id68Check.checked){
        let textGastro = 'Visitando una bodega y sus viñedos';
        ids.push(textGastro);
    }

    console.log(ids);
    sessionStorage.setItem('p8', JSON.stringify(ids));

    arrayOrder = array.sort();
    var became = sessionStorage.setItem('pregunta8', JSON.stringify(arrayOrder));
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

    window.location.href = "index-pregunta9.html";

};

checkbox1 = document.getElementById('check18')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
checkbox2 = document.getElementById('check28')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
checkbox3 = document.getElementById('check38')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
checkbox4 = document.getElementById('check48')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});
checkbox5 = document.getElementById('check58')
checkbox5.checked = eval(window.sessionStorage.getItem(checkbox5.id))

checkbox5.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox5.id, checkbox5.checked)
});
checkbox6 = document.getElementById('check68')
checkbox6.checked = eval(window.sessionStorage.getItem(checkbox6.id))

checkbox6.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox6.id, checkbox6.checked)
});