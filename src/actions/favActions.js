import axios from 'axios'
import { ADD_FAV, ADD_EXITO, ADD_ERROR } from '../types'

// Agregando a favoritos
export function addFav (characterFav) {
  
  console.log(characterFav)

  return ( dispatch ) => {
    dispatch( agregarFav() )

    try {
      // insertar en la API
      let config = {
        method: 'post',
        url: 'http://localhost:5000/favoritos',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : characterFav
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      // modifica el state
      dispatch( agregarFavExito(characterFav))
    } catch (error) {
      dispatch( agregarFavEror(true))
    }
  
  }
}

const agregarFav = () => ({
  type: ADD_FAV,
  // payload: true
})

// Si se guarda en la BD
const agregarFavExito = (characterFav) => ({
  type: ADD_EXITO,
  payload: characterFav
})

// Si hubo un error
const agregarFavEror = (estado) => ({
  type: ADD_ERROR,
  payload: estado
})