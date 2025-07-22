// Obtengo los formularios formAny, formAnyTipus
const formAny = document.getElementById("formAny");
const formAnyTipus = document-getElementById("formAnyTipus");


// Obtengo el valor del input text anyo
formAny.addEventListener('submit', (e) => {
    e.preventDefault(); // Para que no borre el formulario
    let any = document.getElementById('anyo').value;
    any = "/api/eoi/year/" + any;
    window.location.href = any; // Lo envia a la ruta correspondiente
});

// Obtengo los valores de los input text anyo2 y tipus
formAnyTipus.addEventListener('submit', (e) => {
    e.preventDefault(); // Para que no borre el formulario
    let any = document.getElementById('anyo2').value;
    let tipo = document.getElementById('tipus').value;
    let ruta = "/api/eoi/year/" + any + "/type/" + tipo;
    window.location.href = ruta; // Lo envia a la ruta correspondiente
});




