import axios from 'axios'
import { 
  ADD_FAV,
  ADD_EXITO,
  ADD_ERROR,
  INIT_DOW_FAV,
  DOW_FAV_EXITO,
  DOW_FAV_ERROR,
  GET_FAV_DELETE,
  FAV_DELETE_EXITO,
  FAV_DELETE_ERROR
} from '../types'

// Agregando a favoritos
export function addFav (characterFav) {
  
  // console.log(characterFav)

  return async ( dispatch ) => {
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
      
      await axios(config)
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


// Funcion para obtener los personajes de la BD
export function getFav() {

  return async ( dispatch ) => {

    dispatch( dowCharacterFav() )

    try {
      
      let config = {
        method: 'get',
        url: 'http://localhost:5000/favoritos',
        headers: { 
          'Content-Type': 'application/json'
        },
      }
      
      await axios(config)
      .then(function (response) {
        // console.log(response.data);
        dispatch( dowCharacterFavSuccess(response.data) )
      })
      .catch(function (error) {
        console.log(error);
      })

    } catch (error) {
      console.log(error)
      dispatch( dowCharacterFavError() )
    }

  }

}

const dowCharacterFav = () => ({
  type: INIT_DOW_FAV,
  payload: true
})

const dowCharacterFavSuccess = (favs) => ({
  type: DOW_FAV_EXITO,
  payload: favs,
})

const dowCharacterFavError = () => ({
  type: DOW_FAV_ERROR,
  payload: true,
})

// selecciona y elimina el producto
export function deleteFav (id) {

  return async ( dispatch ) => {

    dispatch( getFavDelete(id) )
    // console.log(id)

    try {
      
      let config = {
        method: 'delete',
        url: `http://localhost:5000/favoritos/${id}`,
        headers: { }
      };
      
      await axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch( getFavDeleteSucces() )
      })
      .catch(function (error) {
        console.log(error);
      })

    } catch (error) {
      console.log(error)
      dispatch(getFavDeleteError())
    }

  }

} 

const getFavDelete = (id) => ({
  type: GET_FAV_DELETE,
  payload: id,
})

const getFavDeleteSucces = () => ({
  type: FAV_DELETE_EXITO,
  // payload: ,
})

const getFavDeleteError = () => ({
  type: FAV_DELETE_ERROR,
  payload: true
})