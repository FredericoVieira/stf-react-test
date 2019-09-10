export function setCountries(countries) {
  return {
    type: 'SET_COUNTRIES',
    countries
  }
}

export function setCountry(country) {
  return {
    type: 'SET_COUNTRY',
    country
  }
}

export function clearCountry() {
  return {
    type: 'CLEAR_COUNTRY'
  }
}
