const formulario = document.getElementById("formulario-id");
const text = document.getElementById("text-id");
const number = document.getElementById("number-id");
const email = document.getElementById("email-id");
const password = document.getElementById("password-id");
const imagen = document.getElementById("imagen-id");

const rickandmortyAPI = "https://rickandmortyapi.com/api/character"
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"
const yugiohAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

// function cargarDatos(evento) {

//     console.log(text.value);
//     console.log(number.value);
//     console.log(email.value);
//     console.log(password.value);
// }

function cargarDatosPokemon() {
    fetch(yugiohAPI)
    .then(response => response.json())
    .then(data => {
        console.log({data});
    })
}

formulario.addEventListener("submit", evento => {
    evento.preventDefault()
    cargarDatos()    
});

