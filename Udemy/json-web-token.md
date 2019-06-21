## JSON WEB TOKEN (JWT)

Es un estandar cuyo fin es permitir compartir información entre distintas aplicaciones en un objeto JSON.
- JWT ayuda mucho a la hora de transferir datos de una aplicación en otra y lo realiza de forma segura
- Dos aplicaciones web pueden compartir datos seguros utilizando JWT, ya que verifican la autenticidad del JSON
- JWT puede ser utilizado en cualquier framework o librería

### ¿ Cuándo utilizar JWT ?
1.- Cuando se requiere una autorización
  Es el mas común de sus usos, cuando el usuario ha sido logueado se almacena el JWT y se verifica para que pueda acceder a las distintas rutas de la aplicación, servicios o recursos que permite el Token.
2.- Intercambio de información
  Son seguros para compartir datos entre aplicaciones, de esta forma te aseguras que los datos enviados a un servidor no serán interceptados

### Partes de un JWT
* Header: tipo de JWT y algoritmo
* Payload: información de la entidad y datos adicionales
* Signature o Firma:  verifica que el mensaje no ha cambiado en su transporte
