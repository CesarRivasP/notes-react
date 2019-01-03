Redux - Estado de la aplicación
React se encarga de la manipulación de la parte visual de la aplicación.
Es un framework que no opina (Opinionated) sobre como se va a manejar el estado de la aplicación. Allí es donde interviene redux.
Redux es un framework que se aboca exclusivamente a manejar el estado de la aplicación, es su única aplicación.
- No esta ligado en cuanto a su constitución a React, pero en la practica habitualmente se encuentran en conjunto.
- Redux es un framework independiente que se puede utilizar con otros frameworks visuales. No obstante, la implementación que se realiza para vincularlo con React es la mas popular y de mayor utilización, por lo tanto es sobre la que se va a encontrar mas documentación.
- Sin redux el manejo del estado de la aplicación con setStates y manejándolo con el estado dentro de los componentes puede llegar a ser un estado de aplicación mas difícil de trazar, especialmente cuando se tienen funciones asíncronas, ya que esto lleva a un estado de la aplicación que se le denomina 'opaco', y lo que nos proporciona redux es un estado de aplicación mucho mas claro, consistente y facil de entender. Esto nos va a permitir individualizar issues y problemas de una manera mucho mas rápida.

* Store
 Uno de los axiomas sobre los que se base redux es que el estado es único y global en toda la aplicación.
- Va a haber un único componente llamado 'store' donde se guarda el estado de toda la aplicación. Esto permite tener un único punto donde se pueda ver el estado de todos los componentes que luego se renderizan. Así es mas sencillo acceder al estado, y se puede ver que el estado va a ser en forma de árbol, con distintas propiedades que se van ramificando hasta llegar al estado individual de cada uno de ellos (al final se asocian los componentes a ese estado individual).

* Action
 Otro de los axiomas es que el estado se modifica por acciones.
 - La única forma de modificar el estado (READ ONLY), es mediante la emisión de acciones.
 - Las acciones pueden tener a su vez asociados valores, en los cuales se le indica que es lo que se quiere modificar de ese estado, pero la única forma que nos proporciona redux de modificar ese estado de la aplicación es mediante actions.
 - Las actions van a establecer una copia del estado actual, sobre esa copia le van a aplicar las modificaciones pertinentes, y se va a generar un nuevo estado.
 - Solamente mediante acciones se va a poder hacer la transición de un estado a otro.
 Ejemplo:

  state1 => state2 => state3

+ State1 simboliza la aplicación de una acción.
  - Se aplica la acción con un determinado valor que modifica valor del state1 a un state2.
+ El state2 hace una copia del state1 mas la modificación establecida por la acción.
+ Luego se hace la transición del state2 al state3.
Esto nos indica que tenemos distintas copias del estado. Cuando se llegue al state3 se puede hacer deshacer, y volver al state2, ya que lo que tenemos es una copia establecida.

Con la definición de la arquitectura de Redux, tenemos transiciones de estado mucho mas claras. Y por mas que se generen eventos asincronicos, como después esos eventos deben corresponderse con acciones, y eso después establece transiciones de estado que son guardadas, nos permite ver como se ejecutan esas transiciones independientemente de que los eventos se hagan de manera asíncrona se puede hacer una traza de las modificaciones mucho mas fácil.

* Una de las claves de como se manejan los estados dentro de Redux es que es un estado inmutable, y lo que se hacen son copias. Entonces, al no permitir mutaciones se hace una renderizacion mucho mas rápida porque las comparaciones que lleva a cabo react en los procesos de Reconciliation y otros, se establecen a nivel de objeto si hay modificación o no, y esto hace que sean mucho mas eficientes las renderizaciones.
- Se utilizan librerías como inmutableJS (No se permiten mutaciones)

* Reducer
Es una función.

* Dispatch
Es un método que ayuda a disparar una acción.


* Instalación de Redux
- La librería core de redux es independiente de React, ya que redux esta intencionadamente separado de React. Esta pensado para que pueda ser utilizado con Javascript plano, u otro framework visual como Angular, por decir alguno.
- La librería react-redux es la que realiza la vinculación entre los dos frameworks.

* Inicio
- createStore va a generar el store, que es el lugar donde se va a poner todo el estado de la aplicación.
-  La función createStore espera como parámetro a un 'reducer'.

- Una action es un objeto que viene identificado por un 'type'(nombre que identifica el tipo de acción), y se le pasa como valor el dato que se esta cambiando.

- Se debe abstraer lo máximo posible la lógica del dispatch de las acciones, o la lógica de modificación del store.
- Toda la manipulación del estado debe quedar por fuera del componente.
- Se debe alejar el componente del manejo del estado (lo que esta en el store).

- En vez de hacer un dispatch directo de la acción, se puede hacer un action creator.
- El action creator es una función que se le pasa al dispatch para luego ser utilizada.
Nota:
En vez de hacer el dispatch de una acción directamente, se llama a un actionCreator. De esta manera estandarizamos la forma en que se llaman a la acciones y también se le proporciona un nombre a esa acción.


* El type es el identificador de la acción y este en la parte del reducer se va a utilizar para catalogar que se debe hacer ante una acción.
Se genera una acción.
La acción genera una modificación (Solicitud de modificación en el reducer de alguna parte del estado), por lo que hay que reaccionar ante eso.
Para reaccionar adecuadamente hay que generar una constante para el 'type' y no usando el literal (nombre de la función), ya que se corre el riesgo de que hayan typos (errores en la escritura).
Las constantes se suelen poner en mayúsculas (por convención) y los nombres de las acciones también se suelen poner de la misma forma que la constante.

Store
Este también debe estar en una carpeta separada, de manera que no se confunda con los componentes que utiliza el store.
Ademas, este no debe estar asociado a ningún componente.
El store es único, pero se controla el acceso y se divide de acuerdo a quien lo necesita mediante el uso de los Reducers y se modifica mediante las acciones.

React-Redux
Esta librería nos permite abstraernos de la utilización directa del store. Dicho eso, siempre van a haber clases intermediarias que van a terminar invocando el store.
Esto genera un mayor desacoplamiento, pero a la vez que desacoplamos y modularizamos el código también se le agrega complejidad al entendimiento de lo que se esta realizando.

- Para generar la vinculación antes comentada, se realiza dentro del punto de generación de la aplicación (index.js), donde se invoca al punto root, donde se monta toda la aplicación, se pasa el componente principal directamente que es donde vive la aplicación, allí es donde se va a generar el punto en el que se va a invocar a 'react-redux'.

- Al createStore se le pasa como primer parámetro una función la cual es el Reducer, y como segundo recibe el estado inicial de la aplicación. Como tercero se le pasa el plugin que lo vincula con chrome.

Nota:
Siempre las importaciones de las librerías van arriba de las importaciones de archivos que hayan sido generados por nosotros.

Provider
Se encarga de proveer del store a los componentes que viven en nuestra aplicación de manera que tengan disponible el store.
Los componentes internos van a tener acceso al store sin necesita de importar el componente 'store' en cada uno de los componentes de manera explicita.

Componente 'connect'
Lo provee react-redux, este sirve para conectar las dos librerías (react y redux).
Se debe utilizar sobre cada componente al cual se le quiera dar acceso al 'store', de manera que 'envuelve' al componente, y lo provee de las características extra, la capacidad de acceder al store.
Es una función que su vez espera dos funciones, la segunda función va a ser una función que nos permita trabajar con las acciones (mapDispatchToProps o 'mapDispatchToPropsActions')
La función connect va a retornar otra función, y esa otra función espera que se le pase como parámetro el componente que se esta generando.
// función que retorna otra función -> connect()(componente)

  connect(1,2)(component)

  1.- mapStateToProps(values 'app state') -> retorna un objeto con las propiedades (values) a utilizar. Esas propiedades van a ser las propiedades que se mapeen a propiedades del component. Connect inyecta dichas propiedades en el componente como props, por lo que se va a poder acceder a las propiedades con 'this.props', y va a estar disponible todo lo que se haya indicado en ese objeto
  2.- mapDispatchToProps(func) -> retorna un objeto con funciones que llaman al dispatch, el cual viene como parámetro para que se pueda utilizar dentro de esas funciones. Es decir, que se va a retornar un objeto con funciones que luego se van a mapear, puesto que connect las inyecta como propiedades dentro del componente.

   * Nos va a dar aquellas propiedades que van a ejecutar acciones y nos van a permitir alterar el estado de la aplicación. A su vez, cuando se altera el estado de la aplicación, el mapStateToProps va a ser invocado, y al ser invocado va a setear nuevos valores de propiedades. Ante este cambio, se ejecuta una nueva renderizacion.
   Con estas dos funciones, básicamente se esta gestionando el ciclo de vida de los componentes, y las formas en las que se realizan las renderizaciones. Dentro de connect hay funciones, utilización de cache, que permite hacer lo mas eficientemente posible todo el ciclo como para evitar comparaciones y procesamientos extra. Eso es lo que engloba el connect, tratando de hacer mas eficiente el manejo de las funciones, valores a modificar y demás.

Una vez realizados los pasos anteriores, el componente a exportar ahora no va a ser app.js (por ejemplo), sino va a ser el app.js resultante de la conexión.
Va a ser el componente con habilidad de conectarse con el store.
Una realizado el export del 'nuevo' componente ya no se tiene acceso al store de la misma manera, por lo que la función mapDispatchToPropsActions va recibir como parámetro el dispatch, que a su vez va a esperar que le retornemos un objeto que va a tener las funciones que posteriormente se van a invocar para hacer la creación de las acciones.
Ahora:
Se coloca una propiedad que nos permita invocar a la función
Se le coloca value como parámetro.
Se invoca el dispatch, y se le pasa por parámetro el actionCreator 'setCity', y a este se le pasa el value.

- La funcion connect toma el componente, lo modifica, y genera un componente modificado (conectado al store).

Nota:
Este tipo de transformaciones, funciones que transforman un componente y retornan otro con algún enhancement se llaman 'HIGH ORDER COMPONENTS'.
Los high order components son funciones que toman como parámetro un componente, y retornan otro con alguna mejora o modificación. Se suelen utilizar para solucionar aspectos transversales de la aplicación.

El dispatch esta disponible gracias a que se esta pasando el store en el provider, y viene a través del connect.
**Con el dispatch llamamos al actionCreator**.
El objeto que genera mapDispatchToProps tiene una propiedad, esa propiedad tiene una función que espera un parámetro (de acuerdo a lo que se quiera definir). Entonces, lo que estamos mapeando es el dispatchToProps, esto quiere decir que el objeto que se esta retornando tiene una función (los objetos pueden tener propiedades que son del tipo función), esa función tiene un solo parámetro, para luego pasarle el dispatch con el actionCreator y a este asignándole un valor.


- Las transiciones entre estados de la aplicación se realizan mediante actions.
- El estado de la aplicación va a ser manejado tanto por el store como por los reducers

Nota:
Aunque se generen acciones, si ha estas no se le establece un estado inicial y tampoco se implementa un reducer para que retorne un estado, no se esta manteniendo un estado en la aplicación, por lo que el estado va a permanecer como undefined.

Reducers
El reducer es una función que recibe dos parámetros, el primero es el estado de la aplicación y el segundo son las acciones que se van generando. Con estos dos parámetros se genera un nuevo estado.
- Los reducers son funciones puras
- En el  action que recibe el reducer se va a evaluar el 'type', que es lo que describe el tipo de acción , nombre de la acción. En base a ese nombre de la acción, en el switch se va a revisar si un determinado reducer tiene que hacer algo por esa acción, y de hacerlo, va a generar un nuevo objeto que va a ser el nuevo objeto que va a ser correspondiente al nuevo estado.
Si no corresponde al tipo de acción al que un reducer deba reaccionar, se retorna el estado por defecto.

El reducer en general, debe actuar solamente sobre una acción. Cuanto mas sencillo sea el reducer, mas sencillo es el manejo del estado.
- Pueden haber reducers que atiendan a varias acciones
- Pueden haber múltiples reducers en los que cada uno de ellos atiendan a cada una de las acciones

Ejemplo:
Reducer 'City'
Mediante el spread operator se desglosa el estado inicial, y si existe la propiedad 'city', se modifica el valor por el valor que viene en el payload, sino existe la propiedad 'city', se agrega el valor de payload al objeto inicial.
También se puede agregar un valor por defecto al state en caso de que el state que llega el reductor sea nulo, con la convención de 'export const city = (state, action) => {' por 'export const city = (state = {}, action) => {' nos aseguramos de establecer un valor por defecto. Esa es una característica de ecmascript, que nos permite asignar valores por defecto a parámetros de funciones

* Lo que genera el reductor es una copia del estado con una propiedad alterada (modificada).
Dicho esto, se logra una de las principales premisas de redux, que es generar estado inmutable que va transicionando mediante la ejecución de acciones.

* Una de las premisas básicas de los reducers es que deben ser funciones puras
  Las funciones puras son funciones que dependen solamente de los parámetros que se le están pasando como parámetros de entrada. El retorno de la función solo depende de los valores que le pasamos, por lo que no depende de ningún estado intermedio de la aplicación, no depende de un acceso a una base de datos, de una respuesta de un http request. No depende de ningún tipo de valor externo mas allá de los parámetros que se le están pasando.
  También, no deben alterarse los valores que se reciben por parámetros. Por lo que no se genera side effects 'efectos colaterales'.
  Nota:
    - No se debe altera el estado  
        state.prop = 'nuevo valor'

      * Se puede hacer una copia de lo que llega como parámetro
        { ...state, prop: 'nuevo valor'}
      - Para que el reducer sea una pure function solo tiene que responder a los valores que se le pasan como parámetros. Ningún otro estado de la aplicación debería afectar el resultado del reducer, y a su vez no se debe generar ningún tipo de side effect. Por eso no se alteran los objetos que no son pasados como parámetros, sino que se hace una copia de estos.
