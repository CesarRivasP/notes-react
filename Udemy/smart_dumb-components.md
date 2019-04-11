Smart Components - Dumb Components


Containers (Smart Components)

Son componentes que tienen acceso al estado de la aplicación (connect).
* No tienen representación visual, es solo un contenedor.
* Deben ser de alto nivel, se debe evitar tener containers en jerarquías bajas dentro del árbol de  la aplicación, en este caso, weather data no seria ideal para ser un container, en cambio el weatherList y el ForecastExtended son componentes que naturalmente están mas preparados para conectar con el estado, para ser containers.
* Se debe intentar generar la cantidad mínima indispensable de containers, puesto que al tener una gran cantidad de containers, se va a complicar el tener individualizado el estado de la aplicación.
Entonces se debe tener una cantidad reducida de containers en capas superiores dentro del árbol jerárquico de la aplicación.


Presentational (Dumb Components)

Son componentes que solo tienen lógica de presentación, solo renderizan.
