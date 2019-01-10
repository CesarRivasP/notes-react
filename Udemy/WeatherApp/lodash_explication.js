// Funcionamiento del metodo toPairs de la libreria Lodash

const state = {
  a: 1,
  b: 2,
  c: 3
}

const r = _.toPairs(state);
console.log(r);
      //clave, valor
// R: [["a",1],["b",2],["c",3]]
//En donde la clave es el nombre de la propiedad y el valor es el valor de la propiedad

// ---------------------------------------------------------- //
const state = {
  prop_a: 1,
  prop_b: 2,
  prop_c: 3
}

const r = _.toPairs(state);
console.log(r);

// R: [["prop_a",1],["prop_b",2],["prop_c",3]]

// ---------------------------------------------------------- //

const state = {
  cities: {
    'Barcelona,es': {
      weather: {
        humidity: 34,
        temperature: '10',
        weatherState: 'sun',
        wind: '1.5 m/s'
      }
    },
    'Buenos Aires,ar': {
      weather: {
        humidity: 73,
        temperature: '21',
        weatherState: 'rain',
        wind: '5.1 m/s'
      }
    },
    'Caracas,ve': {
      weather: {
        humidity: 65,
        temperature: '27',
        weatherState: 'cloud',
        wind: '2.6 m/s'
      }
    },
    'Ciudad de México,mx': {
      weather: {
        humidity: 66,
        temperature: '12',
        weatherState: 'cloud',
        wind: '2.1 m/s'
      }
    },
    'Madrid,es': {
      weather: {
        humidity: 29,
        temperature: '9',
        weatherState: 'sun',
        wind: '2.6 m/s'
      }
    },
    'Washington,us': {
      weather: {
        humidity: 39,
        temperature: '1',
        weatherState: 'cloud',
        wind: '8.2 m/s'
      }
    }
  },
  city: 'Caracas,ve'
}

const r = _.toPairs(state.cities);
console.log(r);

/* R:
Barcelona,es,Object: {
  weather: {
    humidity: 73,
    temperature: '21',
    weatherState: 'rain',
    wind: '5.1 m/s'
  } Por ejemplo
},
Buenos Aires,ar,[object Object],
Caracas,ve,[object Object],
Ciudad de México,mx,[object Object],
Madrid,es,[object Object],
Washington,us,[object Object] */

// ----------------------------------------------- //
const state = {
  cities: {
    'Barcelona,es': {
      weather: {
        humidity: 34,
        temperature: '10',
        weatherState: 'sun',
        wind: '1.5 m/s'
      }
    },
    'Buenos Aires,ar': {
      weather: {
        humidity: 73,
        temperature: '21',
        weatherState: 'rain',
        wind: '5.1 m/s'
      }
    },
    'Caracas,ve': {
      weather: {
        humidity: 65,
        temperature: '27',
        weatherState: 'cloud',
        wind: '2.6 m/s'
      }
    },
    'Ciudad de México,mx': {
      weather: {
        humidity: 66,
        temperature: '12',
        weatherState: 'cloud',
        wind: '2.1 m/s'
      }
    },
    'Madrid,es': {
      weather: {
        humidity: 29,
        temperature: '9',
        weatherState: 'sun',
        wind: '2.6 m/s'
      }
    },
    'Washington,us': {
      weather: {
        humidity: 39,
        temperature: '1',
        weatherState: 'cloud',
        wind: '8.2 m/s'
      }
    }
  },
  city: 'Caracas,ve'
}

const r = _.toPairs(state.cities).map(([key,value]) => ({
  key,
  name: key,
  data: value.weather
}));

console.log(r);
document.write(r);
