//Middleware thunk - explication
      //actionCreator
const actionNormal = (payload) => ({ type: 'myAction', payload});

const actionDelay = (payload) => {
  return dispatch => {
    //en vez de retornar un objeto como en actionCreator anterior, retorna una funcion
    //esta funcion tiene como parametro 'payload', y se espera que a este parametro le inyecten el dispatch
    dispatch(`inicio ${payload}`);  //detecta cuando inicia
    window.setTimeout(() => dispatch(`termino: ${payload}`), 1000); //detecta cuando termino
  }
}

const myDispatch = (texto) => {
  console.log(texto);
}

// middlware..thunk -> lo que se ejecuta en el middlware
const payload = "fetching"
const action = actionNormal(payload) // valor del payload
//Aqui el middleware thunk evalua sí la accion que se esta generando tiene como resultado una funcion.
if(typeof action === 'function'){
  console.log("actiondelay");
  action(myDispatch);
} else {
  console.log("action normal");
  console.log(action);
}


/*
R:
  "action normal"
  Object {
    payload: "fetching",
    type: "myAction"
  }
*/

// ----------------------------------------------------------------//
const actionNormal = (payload) => ({ type: 'myAction', payload});

const actionDelay = (payload) => {
  return dispatch => {
    dispatch(`inicio ${payload}`);
    window.setTimeout(() => dispatch(`termino: ${payload}`), 1000);
  }
}

const myDispatch = (texto) => {
  console.log(texto);
}

// middlware..thunk -> lo que se ejecuta en el middlware
const payload = "fetching"
const action = actionDelay(payload)
if(typeof action === 'function'){
  console.log("actiondelay"); //Al detectar que es una funcion llama al action con myDispatch
  action(myDispatch);
} else {
  console.log("action normal");
  console.log(action);
}

/*
R:
    "actiondelay"
    "inicio fetching"
    "termino: fetching"
*/
//Normalmente dispatch nos provee de la capacidad de interactuar con el store
