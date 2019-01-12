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

El component Link se debe usar en conjunto con un Router, como BrowserRouter, el cual nos va a permitir un manejo mas natural de la URL.
Tambien hay otros tipos de routas que nos permiten utilizar la url con otros simbolos como el de '#' u otros que modifican de forma virtual la url sin modificar lo que dice el navegador.
* BrowserRouter es el mas utilizado

Redux Form
Es especialmente para la carga de formularios

Redux Actions
Nos proporciona otra forma de manipular las acciones y manipular los reducers
