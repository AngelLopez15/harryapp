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

// Cada reducer tiene su propio state
const initialState = {
  favoritos: [],
  error: null,
  loading: false,
  deleteFav: null
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        loading: true
      }
    case ADD_EXITO:
      return {
        ...state,
        loading: false,
        favoritos:[...state.favoritos, action.payload]
      }
    case ADD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case INIT_DOW_FAV:
      return {
        ...state,
        loading: action.payload
      }
    case DOW_FAV_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        favoritos: action.payload
      }
    case DOW_FAV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_FAV_DELETE:
      return {
        ...state,
        deleteFav: action.payload
      }
    case FAV_DELETE_EXITO:
      return {
        ...state,
        favoritos: state.favoritos.filter( favorito => favorito.id !== state.deleteFav ),
        deleteFav: null
      }
    case FAV_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }

}