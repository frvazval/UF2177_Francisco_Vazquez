// Obtengo el formulario formAny
const formAny = document.getElementById("formAny");

// Obtengo el valor del input text anyo
formAny.addEventListener('submit', (e) => {
    e.preventDefault(); // Para que no borre el formulario
    let any = document.getElementById('anyo').value;
    any = "/api/eoi/year/" + any;
    window.location.href = any; // Lo envia a la ruta correspondiente
});


