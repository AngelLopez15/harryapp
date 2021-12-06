import { 
  ADD_FAV,
  ADD_EXITO,
  ADD_ERROR,
  INIT_DOW_FAV,
  DOW_FAV_EXITO,
  DOW_FAV_ERROR
} from '../types'

// Cada reducer tiene su propio state
const initialState = {
  favoritos: [],
  error: null,
  loading: false
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
    default:
      return state
  }

}