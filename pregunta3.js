var boton = document.getElementById('boton');
var array = [];
var arrayOrder = [];
var maximo = 0
var checks = document.querySelectorAll('.datoInput');

boton.addEventListener('click', function () {

  array = [];
  checks.forEach((e) => {
    if (e.checked == true) {
      array.push(e.value);
    }
  });
  arrayOrder = array.sort();

    var became = sessionStorage.setItem('pregunta3',JSON.stringify(arrayOrder));
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

  window.location.href = "index-pregunta4.html";

});

var checkbox1 = document.getElementById('check13')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
  window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
var checkbox2 = document.getElementById('check23')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
  window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
var checkbox3 = document.getElementById('check33')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
  window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
var checkbox4 = document.getElementById('check43')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
  window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});