## React Hooks
- Disponible desde la versión 16.8.
- Permite actualizar el state sin necesidad de crear un class component.
- Es menor la cantidad de código, al menos un 35% menos.
- Mayor facilidad para implementar reducers, administrar el state y context

### Función UseState
- Los hooks vienen con esta función:
`import React, { useState } from 'react'`

- Esta función, al extraer sus valores cuenta con 2 partes:
`const [clientes, guardarCliente] = useState([])`
* clientes tiene el state actual. Este reemplaza a this.state
* guardarCliente es una función, la que cambia el state. Este reemplaza a this.setState({})

- En el useState se da un valor de inicio, se define lo que de momento esta entre corchetes. Al declarar `useState([])` indica que este state arranca como un array vacio

### Existe dos tipos de hooks
- Basicos (uso en 100% de tus proyectos)
  + useState
  + useEffect, que su función es reemplazar los métodos del ciclo de vida. Hace de tanto componentDidMount como de componentDidUpdate

- Avanzados (es menos común su uso)
  + useContext
  + useRef
  + useCallback
  + useReducer
  + useMemo

- Normalmente el state es un objeto, con los hooks un state puede ser cualquier tipo de dato, ya sea un string, array, booleano. También puede ser un objeto como lo era anteriormente.
