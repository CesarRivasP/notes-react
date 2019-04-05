## GraphQL
El cliente Apollo GraphQL es una forma muy popular de interactuar con una API GraphQL en el lado del cliente.

**Apollo Boost:** la configuración de Apollo en el cliente solía requerir bastante código repetitivo, y Apollo Boost corrige eso. Es una combinación de apollo-client, apollo-cache-inmemory, apollo-link-error, apollo-link-http y apollo-link-state que permite una configuración mucho más fácil.

React Apollo : una integración específica de React para Apollo. Nos proporciona una gran cantidad de golosinas como los componentes Queryy Mutation.

Paquetes necesarios
Agrégalos usando npm o Yarn:
```
yarn add graphql graphql-tag apollo-boost react-apollo
```

### Configuración del cliente Apollo
 Iniciaremos un cliente y le daremos el URI a nuestro punto final del servidor GraphQL y luego usaremos el componente ApolloProvider para que el cliente esté disponible en los componentes de nuestra aplicación.

 Algunas cosas a tener en cuenta:

 - Inicializamos al cliente con un HttpLink que apunta a nuestro punto final GraphQL y luego también especificamos InMemoryCache de Apollo como la utilidad de almacenamiento en caché.
 - Usamos el ApolloProvidercomponent, lo pasamos a nuestro cliente como apoyo y luego lo envolvemos alrededor de nuestro Appcomponent.

### Ejemplo de componente de consulta
Para esto, usaremos el Querycomponent de React Apollo, que hace uso del patrón de prop de renderizado para devolvernos los datos de la consulta.

Y vamos a desglosar las cosas importantes que suceden aquí:

- El Apolo Querycomponent toma una necesaria consulta puntal con una consulta GraphQL que ha sido analizado utilizando de graphql-tag gql. Query También toma un apoyo de los childrens requerido que debe ser una función. Aquí también pasamos una proposición variable para proporcionar un valor variable a nuestra consulta.
- QueryTambién puede tomar una serie de accesorios opcionales como pollInterval , fetchPolicy , errorPolicy y delay , entre otros.
- La función pasada a los elementos secundarios recibe un objeto con un puñado de propiedades útiles. Aquí estamos haciendo uso de datos, errores y carga, pero también están disponibles otras propiedades como networkStatus, refetch y fetchMore.
- La propiedad de datos retiene los datos recibidos de la consulta, la propiedad de error contiene un objeto de error, si lo hubiera, y la propiedad de carga será verdadera mientras la consulta esté en vuelo.
