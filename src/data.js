// filtrar, ordenar y calcular

export function filtrarPokemon(arreglo, name) {
  const resultado = arreglo.filter((elemento) => elemento.name.includes(name));
  return resultado;
}
export function filtrarTipo(arreglo, type) {
  const resultadotipo = arreglo.filter((elemento) =>
    elemento.type.includes(type)
  );
  return resultadotipo;
}

export function filtrarResistencia(arreglo, resistant) {
  const resultadoResistant = arreglo.filter((elemento) =>
    elemento.resistant.includes(resistant)
  );
  return resultadoResistant;
}

export function filtrarDebilidad(arreglo, weaknesses) {
  const resultadoWeaknesses = arreglo.filter((elemento) =>
    elemento.weaknesses.includes(weaknesses)
  );
  return resultadoWeaknesses;
}

export function ordenarCp(arreglo, option) {
  const ordenaCp = arreglo.sort((a, b) => {
    if (option === 1) {
      //console.log(a.size.height.substr(0, a.size.height.length-1))//
      return a.stats["max-cp"] - b.stats["max-cp"];
    } else {
      return b.stats["max-cp"] - a.stats["max-cp"];
    }
  });

  return ordenaCp;
}
export function calculando(arreglo, type) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].type.includes(type)) {
      contador++;
    }
  }
  const calculando = (contador / arreglo.length) * 100;

  return calculando;
}
