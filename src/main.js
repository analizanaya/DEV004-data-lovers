//import { example } from './data.js';

import data from "./data/pokemon/pokemon.js";
import {
  filtrarPokemon,
  filtrarTipo,
  filtrarResistencia,
  filtrarDebilidad,
  ordenarCp,
  calculando,
} from "./data.js";

const arreglo = data.pokemon;

const contenedorPokemon = document.getElementById("contenedorPokemon");
function mostrarPokemon(arreglo) {
  contenedorPokemon.innerHTML = "";

  for (let i = 0; i < arreglo.length; i++) {
    contenedorPokemon.innerHTML += `<section class="cardImage">
  <section class="rectanguloInterno">
       <h5 class="num">${arreglo[i].num}</h5>
       <h1 class="nombre">${arreglo[i].name}</h1>
       <h5 class="generacionNumero"> <span class="negrita">Num: </span>${
  arreglo[i].generation.num
}</h5>
       <h5 class="generacionNombre"> <span class="negrita">Name:</span>${
  arreglo[i].generation.name
}</h5>
       <h4 class="cp"> CP: ${arreglo[i].stats["max-cp"]}</h4>
       <h4 class="hp"> HP: ${arreglo[i].stats["max-hp"]}</h4>
       <img src="${arreglo[i].img}" alt="" class="imagen">
       <h6 class="altura"> <span class="negrita">Height: </span> ${
  arreglo[i].size.height
}</h6>
       <h6 class="peso"> <span class="negrita">Weight:</span> ${
  arreglo[i].size.weight
}</h6>
       <section class="tiposPokemon">
       <h4 class="${arreglo[i].type[0]}">${arreglo[i].type[0]}</h4>
      <h4 class="${
  arreglo[i].type[1] === undefined ? "noShow" : arreglo[i].type[1]
}" >${arreglo[i].type[1]}</h4>
      </section>
      <h5 class="palabraResistant">RESISTANT</h5>
      <h3 class="resistencia"> ${arreglo[i].resistant.join(" | ")}</h3>
      <h5 class="palabraDebilidad">WEAKNESSES</h5>
      <h3 class="debilidad">${arreglo[i].weaknesses.join(" | ")}</h3>
      <h6> <img src="./imagenes/egg-01.png" class="imagenHuevo"></h6>
      <h6 class="huevo">${arreglo[i].egg}</h6>
      <h6> <img src="./imagenes/candy-02.png" class="caramelo"></h6>
      <h6 class="infoCaramelo">${arreglo[i].evolution.candy}</h6>
      </section>
      </section>`;
  }
}

const input = document.getElementById("buscador");
input.addEventListener("change", function () {
  const resultado = input.value;
  const resultadoFiltro = filtrarPokemon(arreglo, resultado);

  mostrarPokemon(resultadoFiltro);
});
const select = document.getElementById("tipos");
select.addEventListener("change", function () {
  const resultadotipo = select.value;
  const typeFiltro = filtrarTipo(arreglo, resultadotipo);

  mostrarPokemon(typeFiltro);
});

const selectResistant = document.getElementById("resistant");
selectResistant.addEventListener("change", function () {
  const resultadoResistant = selectResistant.value;
  const resistantFiltro = filtrarResistencia(arreglo, resultadoResistant);

  mostrarPokemon(resistantFiltro);
});

const selectWeaknesses = document.getElementById("weaknesses");
selectWeaknesses.addEventListener("change", function () {
  const resultadoWeaknesses = selectWeaknesses.value;
  const weaknessesFiltro = filtrarDebilidad(arreglo, resultadoWeaknesses);

  mostrarPokemon(weaknessesFiltro);
});

const ordenCp = document.getElementById("ordenar");
ordenCp.addEventListener("change", function () {
  const resultadoCp = ordenCp.value;
  switch (resultadoCp) {
  case "1": {
    const cpAscendente = ordenarCp(arreglo, 1);
    mostrarPokemon(cpAscendente);
    break;
  }
  case "2": {
    const cpDescendente = ordenarCp(arreglo, 2);
    mostrarPokemon(cpDescendente);
    break;
  }
  }
});

const calcularPorcentaje = document.getElementById("calcular");
calcularPorcentaje.addEventListener("change", function () {
  const resultadoPorcentaje = calcularPorcentaje.value;
  const calcularPokemon = calculando(arreglo, resultadoPorcentaje);
  console.log(calcularPokemon);

  alert("El porcentaje es:" + calcularPokemon.toFixed(2) + "%");
});
console.log(calcularPorcentaje);

const calcularPorcentaje2 = document.getElementById("calcular2");
calcularPorcentaje2.addEventListener("change", function () {
  const resultadoPorcentaje2 = calcularPorcentaje2.value;
  const calcularPokemon2 = calculando(arreglo, resultadoPorcentaje2);
  console.log(calcularPokemon2);

  alert("El porcentaje es:" + calcularPokemon2.toFixed(2) + "%");
});
console.log(calcularPorcentaje2);

mostrarPokemon(arreglo);
