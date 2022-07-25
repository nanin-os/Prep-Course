//
// En estas primeras 6 preguntas, reemplaza `null` por la respuesta
//
//
// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "nuevaString";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 284;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString( str ){
  // 'return' la string provista: str

    //
    // the code
    //
    var newString_return = str;
    return newString_return;
}

function suma( x, y ){
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newNumber_return = ( newNumber_1 + newNumber_2 );

    return ( newNumber_return );
}

function resta( x, y ){
  // Resta "y" de "x" y devuelve el valor

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newNumber_return = ( newNumber_1 - newNumber_2 );

    return ( newNumber_return );
}

function multiplica( x, y ){
  // Multiplica "x" por "y" y devuelve el valor

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newNumber_return = ( newNumber_1 * newNumber_2 );

    return ( newNumber_return );
}

function divide( x, y ){
  // Divide "x" entre "y" y devuelve el valor

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newNumber_return = ( newNumber_1 / newNumber_2 );

    return ( newNumber_return );
}

function sonIguales( x, y ){
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newBoolean_return = false;
  
    if ( newNumber_1 === newNumber_2 ){
      newBoolean_return = true;
    }

    return newBoolean_return;
}

function tienenMismaLongitud( str1, str2 ){
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newString_1 = str1;
    var newString_2 = str2;

    var newBoolean_return = false;
  
    if ( newString_1.length === newString_2.length ){
      newBoolean_return = true; 
    }

    return newBoolean_return;
}

function menosQueNoventa( num ){
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newNumber = num;

    var newBoolean_return = false;

    if ( newNumber < 90 ){
      newBoolean_return = true;
    }

    return newBoolean_return;
}

function mayorQueCincuenta( num ){
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newNumber = num;

    var newBoolean_return = false;

    if ( newNumber > 50 ){
      newBoolean_return = true;
    }
  
    return newBoolean_return;  
}

function obtenerResto( x, y ){
  // Obten el resto de la división de "x" entre "y"

    //
    // the code :
    //
    var newNumber_1 = x;
    var newNumber_2 = y;

    var newNumberReal_return = 0.00;
  
    newNumberReal_return = ( newNumber_1 % newNumber_2 );

    return newNumberReal_return;
}

function esPar( num ){
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newNumber = num;

    var newBoolean_return = false;

    if ( newNumber % 2 === 0 ){
      newBoolean_return = true;
    }

    return newBoolean_return;
}

function esImpar( num ){
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"

    //
    // the code :
    //
    var newNumber = num;

    var newBoolean_return = true;

    if ( ( newNumber % 2 ) === 0 ){
      newBoolean_return = false;
    }

    return newBoolean_return;
}

function elevarAlCuadrado( num ){
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!

    //
    // the code :
    //
    var newNumber = num;

    var newRealNumber_return = 0.00;

    newRealNumber_return = Math.pow( newNumber, 2 );

    return newRealNumber_return;
}

function elevarAlCubo( num ){
  // Devuelve el valor de "num" elevado al cubo

    //
    // the code :
    //
    var newNumber = num;

    var newRealNumber_return = 0.00;

    newRealNumber_return = Math.pow( newNumber, 3 );

    return newRealNumber_return;
}

function elevar( num, exponent ){
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"

    //
    // the code :
    //
    var newNumber = num;
    var newExponente = exponent;

    var newRealNumber_return = 0.00;

    newRealNumber_return = Math.pow( newNumber, newExponente );

    return newRealNumber_return;
}

function redondearNumero( num ){
  // Redondea "num" al entero más próximo y devuélvelo

    //
    // the code :
    //
    var newNumber = num;

    var newNumber_return = 0;

    newNumber_return = Math.round( newNumber );

    return newNumber_return;
}

function redondearHaciaArriba( num ){
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo

    //
    // the code :
    //
    var newNumber = num;

    var newNumber_return = 0;

    newNumber_return = Math.ceil( newNumber );

    return newNumber_return;
}

function numeroRandom( ){
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

    //
    // the code :
    //
    var newRealNumber_return = 0.00;

    newRealNumber_return = Math.floor(Math.random( ) * 1 );

    return newRealNumber_return;
}

function esPositivo( numero ){
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

    //
    // the code :
    //
    var newNumber = numero;

    var newStringChar_return = false;

    if ( newNumber > 0 ){
      newStringChar_return = 'Es positivo';
    } else if ( newNumber < 0 ){
      newStringChar_return = 'Es negativo';
    }

    return newStringChar_return;
}

function agregarSimboloExclamacion( str ){
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"

    // 
    // the code :
    //
    var newStringChar_return = str;

    newStringChar_return = ( newStringChar_return + '!' );

    return newStringChar_return;
}

function combinarNombres( nombre, apellido ){
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"

    // 
    // the code :
    //
    var newStringCharNombre = nombre;
    var newStringCharApellido = apellido;

    newStringChar_return = ( newStringCharNombre + ' ' + newStringCharApellido );

    return newStringChar_return;  
}

function obtenerSaludo( nombre ){
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"

    // 
    // the code :
    //
    var newStringCharNombre = nombre;

    newStringChar_return = ( 'Hola ' + newStringCharNombre + '!' );

    return newStringChar_return;
}

function obtenerAreaRectangulo( alto, ancho ){
  // Retornar el area de un rectángulo teniendo su altura y ancho

    // 
    // the code :
    //
    var newRealHeight = alto;
    var newRealWidth = ancho;

    var newRealBase_return = 0.00;

    newRealBase_return = ( newRealHeight * newRealWidth );

    return newRealBase_return;
}

function retornarPerimetro( lado ){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  
    // 
    // the code :
    //
    var newRealHeight = lado;
  
    var newRealPerimeter_return = 0.00;

    newRealPerimeter_return = ( newRealHeight * 4 );

    return newRealPerimeter_return;
}

function areaDelTriangulo( base, altura ){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

    // 
    // the code :
    //
    var newRealHeight = base;
    var newRealWidth = altura;

    var newRealArea_return = 0.00;

    newRealArea_return = ( ( newRealHeight * newRealWidth ) / 2 );

    return newRealArea_return;
}

function deEuroAdolar( euro ){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.

    // 
    // the code :
    //
    var newRealEUMoney = euro;

    var newRealConversionRatio = 1.20;
    var newRealUSMoney_return = 0.00;

    newRealUSMoney_return = ( newRealEUMoney * newRealConversionRatio );

    return newRealUSMoney_return;
}

function esVocal( letra ){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".

    // 
    // the code :
    //
    var newStringChar = letra;

    var newString_return = 'Dato incorrecto'

    if ( newStringChar.length === 1 ) {

      if ( newStringChar.includes( 'a' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'e' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'i' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'o' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'u' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'A' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'E' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'I' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'O' )) { newString_return = 'Es vocal'; }
      if ( newStringChar.includes( 'U' )) { newString_return = 'Es vocal'; }
    }
  
    return newString_return;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
