var array = [];
var checks = document.querySelectorAll('.datoInput');
var arrayOrder = [];
var maximo = 0;
var ids = [];
var boton = document.getElementById('boton');

/* Variables para obtener texto de preguntas categorizadas */
var id14Check = document.getElementById('check14');
var id24Check = document.getElementById('check24');
var id34Check = document.getElementById('check34');
var id44Check = document.getElementById('check44');
var id54Check = document.getElementById('check54');

boton.addEventListener('click', catchData,  false);

function catchData(array) {

    array = [];
    checks.forEach((e) => {
        if (e.checked == true) {
            array.push(e.value);
        }
    });

    /* Obtener texto de las respuestas chequeadas */
    if(id14Check.checked){
        let textGastro = 'Planificar la lista de restaurantes a los que acudirás o los platos típicos a probar';
        ids.push(textGastro);
    }

    if(id24Check.checked){
        let textHisto = 'Diseñar la ruta e investigar los rincones que tienes que visitar';
        ids.push(textHisto);
    }

    if(id34Check.checked){
        let textWell = 'Asegurar que el hospedaje tenga spa o terapias para cuidarte';
        ids.push(textWell);
    }

    if(id44Check.checked){
        let textOut = 'Revisar reseñas de rutas de trekking o actividades al aire libre disponibles';
        ids.push(textOut);
    }

    if(id54Check.checked){
        let textAstro = 'Buscar una zona donde poder observar el cielo y las estrellas';
        ids.push(textAstro);
    }

    console.log(ids);
    sessionStorage.setItem('p4', JSON.stringify(ids));

    arrayOrder = array.sort();

    sessionStorage.setItem('pregunta4', JSON.stringify(arrayOrder));
    console.log(arrayOrder);

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

    window.location.href = "index-pregunta5.html"

};

    checkbox1 = document.getElementById('check14')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
checkbox2 = document.getElementById('check24')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
checkbox3 = document.getElementById('check34')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
checkbox4 = document.getElementById('check44')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});
checkbox5 = document.getElementById('check54')
checkbox5.checked = eval(window.sessionStorage.getItem(checkbox5.id))

checkbox5.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox5.id, checkbox5.checked)
});