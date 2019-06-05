Context API
- Disponible desde la version 16.3+
- Puedes pasar state o funciones desde el component principal hasta los hijos, sin necesidad de pasarlo por cada componente como se suele hacer con props.
- En react solo se pasan datos del componente principal al hijo, pero con context es mucho mas sencillo
- Se puede actualizar el state desde el hijo (o ejecutar una función que lo actualice)
- Aun se pueden utilizar los props, asi es como React fue diseñado y el 90% de las aplicaciones React así están hechas.
- Si el proyecto es sencillo, tal vez props sea mejor opción que context, por las configuraciones que hay que implementar.
- Context hace mas complicado la reutilización de los componentes

- Palabras clave al utilizar context:
* Provider: es donde se crean los datos, el state y funciones (fuente de los datos, o componente principal)
* Consumer: es donde se consumen los datos, o donde se accede a ellos o se utilizan las funciones.

- Con context puedes pasar los datos desde el componente padre al componente hijo directamente, sin tener que ir de componente en componente.
- Usualmente el provider va a rodear a algún componente, de esa forma estarán disponibles los datos que estén en provider van a estar disponibles para los componentes que rodean.
