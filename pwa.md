## PWA - Progresive Web Applications
Las aplicaciones web progresivas, o PWA, permiten a los desarrolladores web crear aplicaciones web que pueden comportarse más como aplicaciones nativas.

Un gran punto de venta de los PWA es que pueden trabajar con una conectividad de red deficiente, o incluso sin ninguna conectividad.
Lo logran almacenando en caché los activos de la aplicación web y, cuando es posible, descargando las actualizaciones en segundo plano. Otro beneficio de los PWA es que permiten que las aplicaciones web accedan a funciones nativas, como las notificaciones push. También se pueden agregar a la pantalla de inicio del usuario para facilitar el acceso.

### Implementación de la practica
Todo lo que tenemos que hacer es cambiar **unregister** a **register** para el trabajador de servicios, porque el trabajador de servicios ahora está optando de forma predeterminada en lugar de optar por no participar. Es decir, Hemos habilitado a nuestro trabajador de servicio, y nuestra aplicación React ahora funcionará sin conexión. Sin embargo, solo funcionará en un entorno de producción, por lo que si desea probarlo, primero debe crear una compilación:
```
yarn build
yarn global add serve
serve -s build
```

### Nota:
- Tenga en cuenta también que la aplicación funcionará sin conexión y su shell siempre estará accesible, pero los datos nuevos que deben obtenerse a través del Ajax y como parte de la funcionalidad de la aplicación no se recuperarán mientras se encuentre fuera de línea. Así que querrá crear fallos de fallos y notificaciones de aplicaciones alrededor de eso para informar a sus usuarios.

- Si desea personalizar la apariencia de su PWA para sus usuarios, puede editar el manifiesto de la aplicación web ubicado en public/manifest.json. Aquí, puede establecer el nombre, los iconos y el tema de su aplicación.

### Advertencias
Convertir una aplicación Create React App a una PWA es increíblemente simple, pero es opcional por una buena razón. Antes de implementar su PWA, hay algunas cosas muy importantes que debe tener en cuenta:

- La primera es que necesita estar sirviendo su aplicación web a través de HTTPS. Los trabajadores de servicio solo trabajan en aplicaciones web que se sirven a través de HTTPS, con la única excepción cuando se prueba en localhost.

- En segundo lugar, los activos en caché no se pueden actualizar hasta que se cierren todas las pestañas abiertas. Esto se debe a que podría haber problemas si diferentes pestañas ejecutan diferentes versiones de su trabajador de servicio. Esto es algo que los usuarios no pueden entender de inmediato, lo que nos lleva a nuestro siguiente punto.

- Por último, los usuarios pueden no estar familiarizados con las aplicaciones web progresivas. Por lo tanto, es importante crear un mensaje para el usuario informándoles que la aplicación funciona sin conexión o que la aplicación no se puede actualizar hasta que se cierren todas las demás pestañas. Para ello, puede modificar el archivo ubicado en src/serviceWorker.js. De forma predeterminada, este archivo simplemente imprime esta información usando console.log, pero usted querría agregar algunas funciones personalizadas para mostrar estos mensajes a sus usuarios.
