Issues
Al activarse la acción SET_FORECAST_DATA, la propiedad weather desaparece en la opción seleccionada
porque se esta estableciendo en null y en forecastData esta correctamente estableciendo los valores
que vienen del servidor con el valor del pronostico extendido. Lo anterior fue revisando las diferencias,
al ir al state, se puede verificar que en efecto el estado posee lo que seria el pronostico extendido
(forecastData), pero no tiene la entra del weather como si la tienen las demás opciones que no fueron
seleccionadas. Esto se debe a que en el reducer de 'cities', cuando se establece el forescastData,
se esta generando un nuevo objeto, pero no estamos manteniendo los datos del objeto anterior, es decir, antes
estaba establecido el weather, y ahora lo que hay que hacer es sumar la información del pronostico extendido,
no se debe eliminar lo que estaba antes
