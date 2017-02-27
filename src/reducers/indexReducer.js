import * as types from 'constants/IndexTypes'

const initialState = {
  items: []
}

export default function indexReducer(state = initialState, action) {
  switch (action.type) {
    case types.FINISH_FETCH:
      return { ...state, items: Array.isArray ? action.payload : [action.payload] }
    default:
      return state
  }
}
