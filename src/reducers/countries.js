const initialState = {
  selected: {},
  options: []
}

export function countries(state = initialState, action) {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, options: action.countries }
    case 'SET_COUNTRY':
      return { ...state, selected: action.country }
    case 'CLEAR_COUNTRY':
      return { ...state, selected: {} }
    default:
      return state
  }
}
