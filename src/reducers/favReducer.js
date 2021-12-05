import { ADD_FAV, ADD_EXITO, ADD_ERROR } from '../types'

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
    default:
      return state
  }

}