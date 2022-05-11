// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var rep = array.length
  return array[rep-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let x = 0 ; x < array.length ; x++){
    array[x] = array[x] + 1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  console.log(array)
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var result = ''
  for (let x = 0 ; x < palabras.length ; x++){
      if (palabras.length == 1){
        result = palabras[x]
      }
      else if (result.length == 0){
      result= palabras[x]+" "
    } else if ( x == (palabras.length - 1)) {
      result= result + palabras[x]
    }else {
      result =result + palabras[x] + " "
    }
  }
  return result
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let x = 0 ; x < array.length ; x++){
    if (array[x] === elemento){
      return true
    }
  }
  return false

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var result = 0
  for (let x = 0 ; x < numeros.length ; x++){
    result+= numeros[x]
  }
  return result
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var result = 0
  for (let x = 0 ; x < resultadosTest.length ; x++){
    result+= resultadosTest[x]
  }
  result = result / resultadosTest.length
  return result
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var result = numeros[0]
  for (let x = 0 ; x < numeros.length ; x++){
    if(numeros[x] > result ){
      result = numeros[x]

    }
  }
  return result
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length > 0){
    var result = arguments[0]
    for (let x = 1 ; x < arguments.length ; x++){
      result = result * arguments[x]
    }
    return result
  } else {
    return 0
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0
  for (let x = 0 ; x < arreglo.length ; x++){
    if (arreglo[x]>18){
      cont++
    }
  }
  return cont
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
    case 1 :
      return "Es fin de semana"
    case 2 :
      return "Es dia Laboral"
    case 3 :
      return "Es dia Laboral"
    case 4 :
      return "Es dia Laboral"
    case 5 :
      return "Es dia Laboral"
    case 6 :
      return "Es dia Laboral"
    case 7 :
      return "Es fin de semana"  
    
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  str = ''
  str = str+n
  if (str[0] == 9){
    return true
  }else {
    return false
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var first = arreglo[0]
  for (let x = 0 ; x < arreglo.length ; x++){
    if (arreglo[x] !== first ){
      return false
    }
  }
  return true
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  newArray = []
  for (let x = 0 ; x < array.length ; x++){
    if (array[x] == "Enero" || array[x] == "Marzo" || array[x] == "Noviembre" ){
      newArray.push(array[x])
    }
  }

  if (newArray.length < 3){
    return "No se encontraron los meses pedidos"
  }else {
    return newArray
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newArray = []   
  for (let x = 0 ; x < array.length ; x++){
    if (array[x] > 100 ){
      newArray.push(array[x])
    }
  }
  return newArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  newArray= []
  
  for (let x = 0 ; x < 10 ; x++){
    if (x !== (numero+2)){
    numero = numero + 2
    newArray.push(numero)
    } else{
      return "Se interrumpió la ejecución"
    }
  }
  return newArray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  newArray= []
  
  for (let x = 0 ; x < 10 ; x++){
    if (x !== 5 ){
    numero = numero + 2
    newArray.push(numero)
    } else{
      continue
    }
  }
  return newArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
