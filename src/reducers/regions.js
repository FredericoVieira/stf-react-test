const initialState = {
  selected: '',
  options: [
    { value: '', label: 'All' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]
}

export function regions(state = initialState, action) {
  switch (action.type) {
    case 'SET_REGION':
      return { ...state, selected: action.region }
    default:
      return state
  }
}