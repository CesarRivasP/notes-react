// implementación de la Libreria 'reselect'
// Utiliza Memoizacion

const defaultMemoize = (func, equalityCheck = defaultEqualityCheck) => {
  //verifica si los parametos que se le estan pasando coinciden a los anteriores parametros
  let lastArgs = null;
  let lastResult = null;

//Si son diferentes ejecuta la funcion
//Asi evita la ejecucion de la funcion 'selector' en aquellos casos en que los parametros sean coincidentes con los ultimos que se pasaron
  return function () {
    if(!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)){
      lastResult = func.apply(null, arguments)
    }

    //Si coinciden, devuelve el mismo resultado
    lastArgs = arguments:
    return lastResult;
  }
}

// - El ahorro de procesammiento es bastante importante, y esto es algo bastante habitual que ocurra y no se optimize
// - Se da mucho cuando se tienen grandes colecciones donde se aplica computo o modificaciones complejas
// - La composicion que permiten hacen mas sencillo y mas mantenible el codigo
