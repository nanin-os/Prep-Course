// No cambies los nombres de las funciones.

function devolverPrimerElemento( array ){
  // Devuelve el primer elemento de un  array (pasado por parametro)

    //
    // the code :
    //
    var newArrayObject = array;
    var newObject_return = '';

    newObject_return = newArrayObject[ 0 ];

    return newObject_return;
}

function devolverUltimoElemento( array ){
  // Devuelve el último elemento de un array

    //
    // the code :
    //
    var newArrayObject = array;
    var newObject_return = '';

    newObject_return = newArrayObject[ newArrayObject.length - 1 ];

    return newObject_return;
}

function obtenerLargoDelArray( array ){
  // Devuelve el largo de un array

    //
    // the code :
    // 
    var newArrayObject = array;
    var newObjectReturn = '';

    newObjectReturn = ( newArrayObject.length );

    return newObjectReturn;
}

function incrementarPorUno( array ){
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array

    //
    // the code :
    //
    var newArrayObject = array;

    for ( let i = 0; i < newArrayObject.length; i++ ){
      newArrayObject[ i ] = ( newArrayObject[ i ] + 1 );
    }

    return newArrayObject;
}

function agregarItemAlFinalDelArray( array, elemento ){
  // Añade el "elemento" al final del array
  // y devuelve el array

    //
    // the code :
    //
    var newArrayObject = array;
    var newElementObject = elemento;

    newArrayObject.push( newElementObject );

    return newArrayObject;
}

function agregarItemAlComienzoDelArray( array, elemento ){
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`

    //
    // the code :
    //
    var newArrayObject = array;
    var newElementObject = elemento;

    newArrayObject.unshift( newElementObject );

    return newArrayObject;
}

function dePalabrasAFrase( palabras ){
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'

    //
    // the code :
    //
    var newArrayObject = palabras;
    var newStringObject_return = newArrayObject[ 0 ];
  
      for ( let i = 1; i < newArrayObject.length; i++ ){
        newStringObject_return = ( newStringObject_return.concat( ' ', newArrayObject[ i ] ) );
      }
    return newStringObject_return;
}

function arrayContiene( array, elemento ){
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está

    //
    // the code :
    //
    var newArrayObject = array;
    var newElementObject = elemento;
    var newBoolean_return = false;
  
    for ( let i = 0; i < newArrayObject.length; i++ ){

      if ( newArrayObject[ i ] === newElementObject ){
        newBoolean_return = true;
      }
    }  
  return newBoolean_return;
}

function agregarNumeros( numeros ){
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor

    //
    // the code :
    //
    var newArrayObject = numeros;
    var newObject_return = newArrayObject[ 0 ];

    for ( let i = 1; i < newArrayObject.length; i++ ){
      newObject_return = newObject_return + newArrayObject[ i ];
    }
    return newObject_return;
}

function promedioResultadosTest( resultadosTest ){
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes

    //
    // the code :
    //
    var newArrayObject = resultadosTest;
    var newObject_return = newArrayObject[ 0 ];

    for ( let i = 1; i < newArrayObject.length; i++ ){
      newObject_return = ( newObject_return + newArrayObject[ i ] ) ;
    }
    newObject_return = newObject_return / newArrayObject.length;

    return newObject_return;
}

function numeroMasGrande( numeros ){
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande

    //
    // the code :
    //
    var newArrayObject = numeros;
    var newObject_return = 0;

    newObject_return = Math.max.apply( null, newArrayObject );

    return newObject_return;
}

function multiplicarArgumentos( ){
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo

    //
    // the code :
    //
    var newObject_return;

    if( arguments.length < 1) return 0;

    var newObject_return = 1;

    for( let i = 0; i < arguments.length; i++ ){
      newObject_return = newObject_return * arguments[ i ];
    }

    return newObject_return;
}

function cuentoElementos( arreglo ){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.

    //
    // the code :
    //
    var newArrayObject = arreglo;
    var newObject_return = 0;

    for ( let i = 0; i < newArrayObject.length ; i++ ){
      if ( newArrayObject[ i ] > 18 ){ newObject_return = newObject_return + 1; }
    }
    return newObject_return;
}

function diaDeLaSemana( numeroDeDia ){
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 

    //
    // the code :
    //
    var newArrayObject = numeroDeDia;
    var newObject_return = '';

    if ( newArrayObject === 1 ){ newObject_return = ( 'Es fin de semana' ); }
    if ( newArrayObject === 2 ){ newObject_return = ( 'Es dia Laboral' ); }
    if ( newArrayObject === 3 ){ newObject_return = ( 'Es dia Laboral' ); }
    if ( newArrayObject === 4 ){ newObject_return = ( 'Es dia Laboral' ); }
    if ( newArrayObject === 5 ){ newObject_return = ( 'Es dia Laboral' ); }
    if ( newArrayObject === 6 ){ newObject_return = ( 'Es dia Laboral' ); }
    if ( newArrayObject === 7 ){ newObject_return = ( 'Es fin de semana' ); }

    return newObject_return;
} 

function empiezaConNueve( n ){
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.

    //
    // the code :
    //
    var newArrayObject = n;
    var newBoolean_return = false;

    newStringArrayObject = newArrayObject.toString( );

    if ( newStringArrayObject[ 0 ] === '9' ){ newBoolean_return = true; }

    return newBoolean_return;
}

function todosIguales( arreglo ){
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.

    //
    // the code :
    //
    var newArrayObject = arreglo;
    var newBoolean_return = false;

    for ( let i = 1; i < newArrayObject.length; i++ ){
      if ( newArrayObject[ i - 1 ] === newArrayObject[ i ]){ newBoolean_return = true }
    }
    return newBoolean_return;
} 

function mesesDelAño( array ){
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  //"Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"

    //
    // the code :
    //
    var newArrayObject = array;
    var newArray_return = [ ];

    var intCounter = 0;

    for ( let i = 0; i < newArrayObject.length; i++ ){
      if ( newArrayObject[ i ] === 'Enero' ){ newArray_return.push( 'Enero' ); intCounter++; }
      if ( newArrayObject[ i ] === 'Marzo' ){ newArray_return.push( 'Marzo' ); intCounter++; }
      if ( newArrayObject[ i ] === 'Noviembre' ){ newArray_return.push( 'Noviembre' ); intCounter++; }
    }
    if ( newArray_return.length < 3 ){ newArray_return = 'No se encontraron los meses pedidos' }
    return newArray_return;
}

function mayorACien( array ){
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.

    //
    // the code :
    //
    var newArrayObject = array;
    var newArray_return = [ ];

    for ( let i = 0; i < newArrayObject.length; i++ ){
      if ( newArrayObject[ i ] > 100 ){ newArray_return.push( newArrayObject[ i ] ); }
    }
    return newArray_return;
}

function breakStatement( numero ){
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'

    //
    // the code :
    //
    var newArrayObject = numero;
    var newArray_return = [ ];

    for ( let i = 0; i < 10; i++ ){
      newArrayObject = ( newArrayObject + 2 );
      newArray_return[ i ] = newArrayObject;

      if ( newArrayObject === i ){ 
        newArray_return = 'Se interrumpió la ejecución';
        break 
      }
    }
    return newArray_return;
}

function continueStatement( numero ){
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'

    //
    // the code :
    //
    var newArrayObject = numero;
    var newArray_return = [ ];

    for ( let i = 0; i < 10; i++ ){
      if ( i === 5 ){ 
        continue; 
      }
      else{
        newArrayObject = ( newArrayObject + 2 );
        newArray_return.push( newArrayObject );
      }
    }
    return newArray_return;
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
