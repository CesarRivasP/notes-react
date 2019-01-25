Lodash
Es una libreria que aumenta el potencial a la hora de la manipulación de tipos de datos, sean :
- Array
- Strings
- Objetos
- Composición de funciones
- Manipular y testear valores
- Crear funciones compuestas

También es de utilidad si se quiere brindar compatibilidad con navegadores antiguos y desactualizados

React Router
Nos permite manipular la url de la pagina de una manera que va cambiando de una manera rápida de forma dinámica sin tener que recargar la pagina, que es lo que hace que la aplicación sea una Single Page Application.
El componente link es parte de esta librería, y nos permite el manejo dinámico de la url sin recargar la pagina, es decir que visualmente se va a ver como cualquier otro tipo de link usado en una web page como un componente tipo 'ancla?' que se visualiza con un texto subrayado por lo general de color azul.
Sobre este tipo de texto generalmente se puede hacer click y esto modifica la url de la pagina, pero a diferencia de lo que sucede con un componente ancla normal, no vamos a recargar la pagina. Es decir, la pagina va a permanecer sin modificarse, no va a tener recargas.
La instalación se hace por medio de:
npm i --save react-router-dom

El nombre react-router-dom internamente hace referencia a su librería core que es react-router. Es decir que react-router-dom contiene a react-router internamente como dependencia, de manera que al instalar react-router-dom también se esta instalando la primera. Esta división se debe a que las ultimas versiones de la librería están pensadas para poder utilizarse también en dispositivos android o dispositivos que utilicen React Native, por lo que tiene la versión que es especial para paginas web que es la que se esta usando en el este proyecto (customers-app) y otra especial para React Native.
- Ambas comparten el mismo core que es *react-router*

El componente Link se debe usar en conjunto con un Router, como BrowserRouter, el cual nos va a permitir un manejo mas natural de la URL.
También hay otros tipos de rutas que nos permiten utilizar la url con otros símbolos como el de '#' u otros que modifican de forma virtual la url sin modificar lo que dice el navegador.
* BrowserRouter es el mas utilizado
* Router tiene que ser un componente de máxima jerarquía, tiene que estar al nivel de la app, la idea es que dicho componente no este dentro de otros componentes.
* AL declarar las rutas, se deben envolver dentro de un div u otro componente, puesto que si se ponen varias rutas directamente en el Router si nada de por medio, dará error porque router solo puede tener un child element.
* Route es un componente que permite filtrar que componente se visualiza en base a la url.
  - Se le puede pasar tanto un componente como una función de renderizacion
  - Tiene un parametro llamado 'exact' que establece que cuando la url sea exactamente a la que se esta pasando en 'path' mostrara el componente, de otra manera no lo mostrara.

Nota:
En el caso de que se tengan por ejemplo estas rutas:
  /customers/:ci
  /customers/new"

A pesar de utilizar el atributo exact para todas las rutas definidas, en este caso react-router se confunde, es decir, no soluciona el problema en el que se agregan estos componentes conforme se van visitando mediante su url.
Para estos casos se tiene el componente 'Switch'. Este componente se emplea envolviendo las rutas con las cuales se tiene conflicto. Ante la primer coincidencia valida que encuentra, utiliza esa ruta y descarta el resto, es decir, que va secuencialmente consultando cada una de las rutas que va encontrando y una vez que encuentra alguna que aplica al patrón que se le esta pasando en la url, la utiliza y sale de la validación (el loop en el que va revisando ruta por ruta)
* Para el resolver el problema anterior completamente, se debe colocar siempre la ruta mas especifica primero
  - Por rutas mas especificas se refiere a las que tienen mas concatenaciones y tienen parámetros establecidos, definidos.
* No es necesario agregar el 'exact' cuando la ruta esta envuelta en un switch
* Hay varias soluciones para el mismo problema, pueden consistir en la forma en la que se ordenan los casos de ruta, en implementar el componente Switch, o implementar el atributo exact
El componente Link es el componente a utilizar en primera medida para redireccionar desde la pantalla de home, hacia la pantalla del listado de clientes.

- Si se quiere hacer una transición entre url se puede hacer mediante 'Link', pero si se quiere hacer Mediante
un evento y a raíz de esa función ejecutar la navegación u alguna otra condición, se puede hacer mediante el
elemento 'History', el cual nos permite acceder siempre y cuando el componente este dentro de el router, y dentro
history se maneja un stack 'pila de navegación' en la cual si se quiere navegar hacia otra pantalla, se puede
hacer un push y de esta manera se agrega un elemento al stack y luego cuando el usuario sale de esa ventana
se saca el elemento del stack, de manera que se termina navegando a el elemento anterior
en el stack.
La propiedad history existe dentro del contenedor, a pesar de que no este declarada o importada
El componente Route es el encargado de pasarle las variable de entorno (match, location, history) a los
componentes indicados.
  * Nota: para que route le pueda pasar las propiedades al componente indicado, debe ser declarado directamente
  el componente en el atributo component de Route, si esto se hace por medio de una función no pasa las
  propiedades.
  Para que esto funcione indistintamente de la forma en la que fue declarado, se puede aplicar withRouter y dentro
  se coloca el componente a exportar. Esto le agrega funcionalidades al componente y le agrega las tres propiedades
  que antes solo se pasaban dependiendo de como había sido invocado o declarado el componente


React-Router v4
* La nueva versión sufrió un cambio completo, quebrando la compatibilidad con versiones anteriores
* En la nueva versión se utiliza un enfoque de ruteo dinámico (Dynamic Routing). Esto, contrariamente al enfoque utilizado anteriormente, significa que hay cambios que pueden llegar a ser sustanciales. El ruteo dinámico establece que se resuelve el ruteo a medida que la app y los componentes se renderizan, mientras que en el ruteo estático se establece la navegación como una configuración que esta por fuera de la ejecución de la aplicación, en este caso, se va resolviendo a medida que se produce la ejecución y por eso se tiene routing dentro de los componentes. De esta manera se permite manejar mejor renderizados diferentes de acuerdo con el tamaño de la pantalla para hacer apps responsive

En las anteriores versiones de react-router siempre se hacia la definición del ruteo a nivel de aplicación, en el nivel mas externo. Ahora hay parte del ruteo definida en app.js, en donde nos encontramos con el componente Router (BrowserRouter) y dentro de este las diferentes rutas que acepta.
Todo eso nos permite navegar entre las diferentes paginas.
En la versión anterior de react-router solo había una manera de establecer el ruteo, y era establecer el ruteo a nivel de app.js. A pesar de que en primera instancia se empezó a desarrollar la aplicacion (customer-app) de acuerdo a las posibilidades de la versión anterior, la nueva version nos permite hacer un ruteo anidado, es decir, al estar dentro de un componente se puede definir otro tipo de ruteo.

React-Router es pensado como un core, el cual tiene un componente base que luego es extendido en dos componentes:
- react-router-dom: Es especialmente construido para la navegación web
- react-router-native: Es especialmente construido para React-Native al utilizarlo en android

Esto quiere decir que tiene implementaciones diferenciadas de acuerdo a la plataforma, pero tienen un core en común.

Dentro de los componentes que administran el ruteo, se tiene el Router como componente de alto nivel y base de la forma en la que se realiza el ruteo. Después de este, hay otras tres implementaciones de diferentes de router:
  - Route: es el componente mas importante del sistema de navegación. Cuando el location se corresponde con 'path', se encarga de renderizar los componentes visuales que le sean indicados.
  Ejemplo:
    <Route path="/customers" ... />

    * Este es el path que se esta buscando, cuando la url concuerde con el path que se le esta indicando va a intentar realizar la renderizacion de un componente asociado.
    Las formas en las que se asocia un componente son 3 (formas de invocar a Route):
      + <Route path="/customers" component={Customer} />
      + <Route path="/customers" render={() => (<Customer />)} />
      + <Route path="/customers" children=(({ match, ...rest }) => ( match ? <p>No</p> : <p>Si</p> )) />
        Nota:
        La forma recomendable para mostrar un componente no es de acuerdo a una función, lo recomendable en practica es utilizar 'render', puesto que si se utiliza component pasandole una función, se va a generar el componente cada vez que ejecutamos un cambio de url. Render se puede utilizar para pasarle una función y muestra de acuerdo a dicha función.
        El atributo children evaluá y se ejecuta siempre el renderizado independientemente que la evaluacion se true o false, pero sirve especialmente para mostrar cosas de acuerdo a si es match o no ( match ? <p>No</p> : <p>Si</p> ) por ejemplo, sirve para realizar animaciones.

      * Parámetros que acepta:
        + exact: cuando la url no haga el match exactamente con la url que se esta pasando en path no se va a ejecutar el metodo de renderizado del componente asociado.
        + strict: evaluá si existe una barra final al de la ruta con o no

  - BrowserRouter: se apoya en una funcionalidad de HTML 5 que permite modifica la URL (La api history), por lo que para modificar la url del navegador en forma sincronizada con las solicitudes se utiliza este tipo de router. Es el mas utilizado y el de mas fácil entendimiento.
    * Parámetros que acepta:
      + basename: se establece cual es la ruta base sobre la cual después de construye el resto del árbol de rutas
      + forceRefresh: es especialmente utilizado para navegadores viejos que no soportan en forma completa html5, y al establecerlo en true realiza un redibujado completo de la pagina a medida que se va cambiando la url. Este no es un comportamiento esperado ya que lo se quiere de una single page Application es la forma en la optimizada de re-renderizar la pagina.
      + getUserConfirmation: recibe como parámetro una función 'opcional' que nos permite mostrarle al usuario alguna validación para confirmar la navegación. Por defecto se encuentra en un estado en el que permite la navegación y va continuar dependiendo de la manera en la que se haya invocado.

  - HashRouter: utiliza el simbolo '#' y utiliza la parte de la url después del símbolo, pero en las versiones mas nuevas se recomienda no utlizarlo, puesto que tiene algunos puntos de incompatibilidad en casos claves.
  - MemoryRouter: no modifica la url, es especialmente utilizado para testing en react-router-dom o react-native ya que es una plataforma que no soporta el manejo de url, por lo que al no tener url no seria el router adecuado.

Elemento 'match'
Cuando se tiene una url '/customers/:dni', en realidad esto es la utilización de un *wildcards* o también llamado *url params*. Esto puede ser utilizado como parámetros que le llegan al componente mediante 'match.params'. También nos permite saber si la url es "exact", cual fue el 'path' utilizado para evaluar una ruta, y la porción de la ruta que coincidió con la evaluación. Todas estas informaciones son proporcionadas por el objeto *match*, el cual se encuentra disponible utlizando el route.
De acuerdo al ejemplo utilizado al inicio :
  '/customers/:dni'
    * El 'url params' es el dni
      - Se puede acceder al dato con 'match.params.dni' y asi se puede hacer uso del valor que haya sido introducido en relacion con ese wildcard definido.

Switch (Component)
Es utilizado con rutas que pueden generar evaluaciones ambiguas 'ambiguous matches'.
Genera una estructura de decisión en la cual el primer 'path' es evaluado contra la ruta que genere un resultado positivo sera el que ejecute el renderizado de su componente, terminando el proceso de evaluación sin buscar mas coincidencias en otras rutas que hayan sido definidas debajo. Es decir, se ejecuta como una cascada en la cual las primeras rutas tienen preponderancia sobre las ultimas.

Componentes de Navegación
Ambos son muy similares y representan un elemento que se renderiza como un componente que permite navegación, las diferencia es que:
- Link
- NavLink: permite modificar (customizacion) y puede ser visualizado de otra manera

Redirect (Component)
Es utilizado principalmente para realizar redirecciones, por ejemplo, cuando se necesita evaluar un flujo en el cual el usuario no tiene permitido acceder, por lo que ante un usuario no valido, se puede redireccionarlo a una zona segura.

Funcion withRouter
Es un High Orden Component, y agrega las propiedades match, location, historym y re-renderiza el componente cuando estas propiedades se modifican. Cuando alguna de estas propiedades recibe un nuevo valor, el componente asociado va a re-renderizarse de acuerdo al nuevo valor otorgado.

Elemento History
- Es mutable. Esto hace referencia a que no va a tener valor estático, sino que va a ser alterado mediante distintas funciones, como lo pueden ser:
  * push: permite agregar una nueva entrada. Dentro de history nos permite agregar un elemento a la pila (que es history)
  * replace: permite modificar el ultimo elemento ingresado en history por otro nuevo. Es decir, si se navega a customers y luego se navega a customerNew, customers va a desaparecer del top del stack y va a ser reemplazado por customersNew.

  Las sentencias con 'go' son tres sentencias que nos permiten manejos de navegación tanto con:
  * go(n): es el genérico, se pueden hacer saltos de mas de una unidad.
  * goBack(): para atrás, hacia la ultima navegación conocida. (go - 1)
  * goForward(): una vez que se ejecuta un goBack, se puede volver con goForward nuevamente para adelante (go + 1)

  * block(): cancela o evita la navegación de manera que no se pueda desplazar el usuario libremente en las distintas urls

Redux Form
Es especialmente para la carga de formularios
- Nos facilita el trabajo integrado con redux
- Es necesario que este instalado redux para su funcionamiento
- Para utilizar reduxform hay que generar un reducer, el cual se va a colocar en el index de los reducers, y este reducer lo va a proveer directamente la librería reduxform
- ES importante que la key se llame 'form' en el combineReducer
- Los nombres de los formularios deben ser únicos en la aplicación, sino podrían generarse conflictos
- En el reducer es donde se aloja el estado, pero ese estado debe ser generado por un compoente que reduxform reconoce e interpreta. Ese componente es 'Field'
  * Field: cada uno de los componentes field genera distintas acciones y por medio del action creator que tiene internamente reduxform, permite el funcionamiento del formulario
    + Cada vez que se ejecuta una accion 'change', indica que se esta modificando el estado de la app
    + El accion 'BLUR' hace referencia a cuando sale del control (cuando dejas un field). Este evento se genera al salir de un campo
    + El accion 'FOCUS' hace referencia a cuando ingresas al control de un field
- A los componentes se les puede indicar cuales son sus initialValues, es una propiedad que los componentes reconocen para identificar cuales son los valores iniciales en los field
- initialValues es una propiedad que esta establecida en redux-form, y por ello es la forma que reconoce para establecer valores iniciales.
Para que funcione, las llaves de los valores que se están pasando como iniciales deben coincidir con el valor que se le asigno al Field del componente, de no coincidir no tomara los valores iniciales

Redux Actions
- Esta librería tiene como objetivo generar un código mas compacto y mas claro a la lectura.
- Nos proporciona otra forma de manipular las acciones y manipular los reducers

* handleAction es una utilidad que permite manejar los reducers
* handleActions en vez de esperar solo una clave de constante, espera un objeto que va estar compuesto por las distintas constantes como claves de este objeto (como un diccionario), y luego dicha clave va a estar asociada a una función. Es decir, que en vez de tener una sola action a trabajar, se puede tener un listado de acciones y siempre se asocia a una función donde el primer parámetro es el state y el segundo es el valor de la acción


json-server
Siempre que si quiera trabajar con datos y no tengamos en nuestra disposición una base de datos o un servidor se puede simular este contacto con el servidor con esta librería.
Es un paquete que genera un server en base a un archivo json y luego lo podemos consumir realizando tanto get, puts, post y todo tipo de acción http-rest que se quiera hacer ante este pseudo server

- Se invoca de la siguiente manera:
  json-server --watch nombreArchivo.json --port 3001

- json-server exige que en cada uno de los registros a consultar, deben poseer una propiedad id (tiene que ser único) para poder generar los métodos get, put, post correctamente
  * El método put es el método http correcto para hacer modificación de datos

Nota:
La bandera watch indica que cada vez que se modifique el archivo va a estar siendo supervisado por json-server y va levantar de nuevo la nueva estructura de datos que haya sido implementada

redux-promise
- Cuando se esta utilizando redux-actions, el middleware que mas se ajusta al contexto es redux-promise
- Con este middleware se puede utiliza la acción de redux actions
- Aplicando este middleware, la acción no va a llegar de forma directa al reducer una vez se dispara, como sucede normalmente, sino que la acción va a ser retrasada hasta que se ejecute y se resuelva la promise enviada por el fecth, una vez se obtiene el valor resultante se va a generar una nueva acción FETCH_CUSTOMERS copia de la original que recién en ese momento va a ser tomada por el reducer y va a tener como resultado del server en el payload. En ese momento, en el payload va a venir el dato que nos retorna el server.
- promiseMiddleware se encarga de trabajar en paralelo con las promises, retrasa la resolución, y una vez tiene la resolución de la promise recién allí concluye la acción.

Funcionamiento Interno
- Cuando encuentra actions que en su payload tienen una promise, entonces ejecuta la promise, y
retiene la acción (no invoca a next(action)).
  * En este caso lo que va a detectar es que exista el 'then' típico de una promise, y que este sea una
  función. De esta manera en forma dinámica detecta que la estructura que se le esta pasando es una
  promise.
- Por todo lo explicado anteriormente, la acción no llega directamente al reducer, sino que es consumida
por el mismo middleware.
- Una vez se resuelve la promise, genera una acción que es copia de la original, pero con el resultado de
la promise en el payload. Es decir, desde un lado se genera la acción y luego viene en el reducer esta accion
con un payload establecido por el resultado de la promise
- Si la promise finaliza en error, genera una acción con el error en el payload, y con la propiedad error
como un boolean establecido en true
  * En caso de que en la evaluación del middleware, resulte que el payload no es una promise, no hace nada, solo sigue el flujo normal
  * En caso de que resulte que la evaluación sea verdadera, ejecuta la promise y copia la acción original y le hace dispatch
