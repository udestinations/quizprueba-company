
// Variables que obtienen el valor de cada respuesta
var resultadoForm = JSON.parse(sessionStorage.getItem("usuario"));
var resultado1 = JSON.parse(sessionStorage.getItem("pregunta1"));
var resultado2 = JSON.parse(sessionStorage.getItem("pregunta2"));
var resultado3 = JSON.parse(sessionStorage.getItem("pregunta3"));
var resultado4 = JSON.parse(sessionStorage.getItem("pregunta4"));
var resultado5 = JSON.parse(sessionStorage.getItem("pregunta5"));
// var resultadoTest = JSON.parse(sessionStorage.getItem("preguntatest"))
// var resultadoTest2 = JSON.parse(sessionStorage.getItem("preguntatest2"));
var resultado6 = JSON.parse(sessionStorage.getItem("pregunta6"));
var resultado7 = JSON.parse(sessionStorage.getItem("pregunta7"));
var resultado8 = JSON.parse(sessionStorage.getItem("pregunta8"));
var resultado9 = JSON.parse(sessionStorage.getItem("pregunta9"));
var resultado10 = JSON.parse(sessionStorage.getItem("pregunta10"));
var resultado11 = JSON.parse(sessionStorage.getItem("pregunta11"));
var resultado12 = JSON.parse(sessionStorage.getItem("pregunta12"));
var resultado13 = JSON.parse(sessionStorage.getItem("pregunta13"));
var resultado14 = JSON.parse(sessionStorage.getItem("pregunta14"));

var p4 = JSON.parse(sessionStorage.getItem("p4"));
var p7 = JSON.parse(sessionStorage.getItem("p7"));
var p8 = JSON.parse(sessionStorage.getItem("p8"));
var p10 = JSON.parse(sessionStorage.getItem("p10"));
var p11 = JSON.parse(sessionStorage.getItem("p11"));
var p12 = JSON.parse(sessionStorage.getItem("p12"));
var p13 = JSON.parse(sessionStorage.getItem("p13"));
var p14 = JSON.parse(sessionStorage.getItem("p14"));

// Variable que recoge valor de pregunta 6 para posterior seleccionado de subperfil
var opcion6 = resultado6.toString();

// ALGORITMO PRINCIPAL DEL SELECCIONADO DE PERFIL
function elQueMasAparece() {

    // Constante que genera el campo de texto que albergará el nombre de perfil
    const valorDesdeLS = document.getElementById('valorDesdeLS');

    // Constante que crean una imagen y su vez se les da el valor con la url de las imágenes
    const imgAstroturismo = document.createElement('img');
    imgAstroturismo.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/astroturismo_z8srga.jpg';
    const imgGastronomico = document.createElement('img');
    imgGastronomico.src = 'https://res.cloudinary.com/udestinations/image/upload/v1671192464/quiz/peril-viajero/WhatsApp_Image_2022-12-16_at_13.01.21_myftgg.jpg';
    const imgHistorico = document.createElement('img');
    imgHistorico.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176875/quiz/peril-viajero/historico_wwnpob.jpg';
    const imgWellness = document.createElement('img');
    imgWellness.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/wellness_mzds4f.jpg';
    const imgOutdoors = document.createElement('img');
    imgOutdoors.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/aventura_mbmpku.jpg';


    // Constantes que contienen los links hacia las landings
    const linkAstro = "https://udestinations.es/su-perfil-viajero-es-astroturismo";
    const linkGastro = "https://udestinations.es/su-perfil-viajero-es-gastronomico";
    const linkHisto = "https://udestinations.es/su-perfil-viajero-es-historico-cultural";
    const linkOut = "https://udestinations.es/tu-perfil-viajero-es-outdoors-aventura";
    const linkWell = "https://udestinations.es/su-perfil-viajero-es-wellnex-relax";

    //Constantes que crean un enlace en el front
    const elementAstro = document.createElement('a');
    const elementGastro = document.createElement('a');
    const elementHisto = document.createElement('a');
    const elementWell = document.createElement('a');
    const elementOut = document.createElement('a');

    // Propiedades del objeto datos reconvertido a Objeto
    const nombre = resultadoForm.name;
    const apellido = resultadoForm.surname;
    const email = resultadoForm.email;
    const telefono = resultadoForm.phone;


    // ***************************************************

    // Flujo de control para calcular perfil mas frecuente
    var arrayTotal = [...resultado4, ...resultado7, ...resultado8, ...resultado10, ...resultado11, ...resultado12, ...resultado13, ...resultado14];
    var arrayOrder = arrayTotal.sort();
    console.log(arrayOrder);

    var mapeo = {};
    var mapeo2 = {};
    var mas_frecuente = "";
    var mas_frecuente2 = "";
    var valor_mayor = 0;
    var valor_mayor2 = 0;

    // Funcion que obtiene el elemento más frecuente del array
    if (typeof arrayOrder === "string") {
        arrayOrder = arrayOrder.split(" ");
    }

    for (let elemento of arrayOrder) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        } else {
            mapeo[elemento] = 1;
        }
    };


    for (let elemento in mapeo) {
        if (mapeo[elemento] > valor_mayor) {
            valor_mayor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }

    // Filtramos para eliminar el mas frecuente
    var newArrayOrder = arrayOrder.filter(elemento => elemento != mas_frecuente);
    console.log(newArrayOrder);
    // Flujo para averiguar segundo elemento
    for (let element of newArrayOrder) {
        if (mapeo2[element]) {
            mapeo2[element]++;
        } else {
            mapeo2[element] = 1;
        }
    }

    for (let element in mapeo2) {
        if (mapeo2[element] > valor_mayor2) {
            valor_mayor2 = mapeo2[element];
            mas_frecuente2 = element;
        }
    } 

    console.log(valor_mayor);
    console.log(valor_mayor2);

    // Links para las landings

    elementAstro.setAttribute("href", linkAstro);
    elementAstro.innerHTML = "« Descubre más detalles » ";

    elementGastro.setAttribute("href", linkGastro);
    elementGastro.innerHTML = "« Descubre más detalles » ";

    elementHisto.setAttribute("href", linkHisto);
    elementHisto.innerHTML = "« Descubre más detalles » ";

    elementWell.setAttribute("href", linkWell);
    elementWell.innerHTML = "« Descubre más detalles » ";

    elementOut.setAttribute("href", linkOut);
    elementOut.innerHTML = "« Descubre más detalles » ";

    // Variables de sub-perfiles

     var premium = ' premium';
     var low_cost = ' moderado';

    var respPremium = "Me gusta vivir y disfrutar el viaje al máximo sin importar el costo";
    var respLow = "Intento que el viaje sea lo más económico posible";

    // Flujo de control de selección de perfil de viajero

    if (mas_frecuente === 'astroturismo') {
        /*window.location.href = linkAstro;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgAstroturismo)
        document.body.appendChild(elementAstro)
    }

    if (mas_frecuente === 'gastronomico') {
        /*window.location.href = linkGastro;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgGastronomico)
        document.body.appendChild(elementGastro)
    }

    if (mas_frecuente === 'historico') {
        /*window.location.href = linkHisto;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgHistorico)
        document.body.appendChild(elementHisto)
    }

    if (mas_frecuente === 'wellness') {
        /*window.location.href = linkWell;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgWellness)
        document.body.appendChild(elementWell)
    }

    if (mas_frecuente === 'outdoors') {
        /*window.location.href = linkOut;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgOutdoors)
        document.body.appendChild(elementOut)
    }

    // Flujo que añade perfiles combinados y sub-categorías

    // Si son iguales, perfil combinado
    if (valor_mayor === valor_mayor2 || (valor_mayor - valor_mayor2) <= 6) {
        mas_frecuente += ' - ' + mas_frecuente2;
        valorDesdeLS.innerHTML = mas_frecuente;
        if (opcion6 === respPremium) {
            valorDesdeLS.innerHTML = mas_frecuente + premium;
        }
        if (opcion6 === respLow) {
            valorDesdeLS.innerHTML = mas_frecuente + low_cost;
        }
    } 

    // Un solo perfil
    if (opcion6 === respPremium) {
        mas_frecuente += premium;
        valorDesdeLS.innerHTML = mas_frecuente;
    } if (opcion6 === respLow) {
        mas_frecuente += low_cost;
        valorDesdeLS.innerHTML = mas_frecuente;
    }


    const perfil = mas_frecuente;
    /* const respuestas = [resultado1, resultado2, resultado3, p4, resultado5, resultado6, p7, p8, resultado9, p10,
                        p11, p12, p13, p14]; */
    const result = [nombre, apellido, email, telefono, perfil, resultado1, resultado2, resultado3, p4, resultado5, resultado6, p7, p8, resultado9, p10,
        p11, p12, p13, p14];

    const resultJson = JSON.stringify(result);

    // Enviar petición al servidor mediante un fetch
    fetch('http://localhost:3000/create', {
        method: 'POST',
        body: resultJson
    });




    /* fetch('https://test-bbdd-quiz-production.up.railway.app/create', {
      method: 'POST',
      body: resultJson
  }); */

    /* console.log(nombre, apellido, email, telefono);
    console.log(mas_frecuente); */
    console.log(resultJson);

};


// Función que oculta el botón de descubrir perfil de viajero una vez que se ha hecho click una vez
function ocultar() {
    var elemento = document.getElementById('button-final');
    elemento.style.display = 'none';
}

// Botón que ejecuta la función principal.
var button = document.getElementById('button-final');
button.addEventListener('click', () => {
    elQueMasAparece();
});
