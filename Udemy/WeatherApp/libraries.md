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
Redux Form
Es especialmente para la carga de formularios

Redux Actions
Nos proporciona otra forma de manipular las acciones y manipular los reducers
