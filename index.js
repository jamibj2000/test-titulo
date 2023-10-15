const formulario = document.getElementById("formulario-id");
const text = document.getElementById("text-id");
const number = document.getElementById("number-id");
const email = document.getElementById("email-id");
const password = document.getElementById("password-id");
const imagen = document.getElementById("imagen-id");
const resultado = document.getElementById("resultado");

const rickandmortyAPI = "https://rickandmortyapi.com/api/character"
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"
const yugiohAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
const attributeEndpoint = "?attribute=divine"

function cargarDatosPokemon() {
    if ( localStorage.getItem("imagen") ) {
        console.log("traido de base de datos");
        imagen.src = localStorage.getItem("imagen")
    } else {
        console.log("fue traido de internet");

        fetch(pokemonAPI + "infernape")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("imagen", data.sprites.front_default)            
            imagen.src = localStorage.getItem("imagen")
        })
    }
}
