import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountry } from '../../actions/countries'
import Country from '../../components/content/Country'
import requester from '../../resources/requester'


const fields = 'fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders'

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countries.selected,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCountry: async country => {
    const [, response] = await requester(
      'GET',
      `name/${country}?${fields}`
    )
    dispatch(setCountry(response.data[0]))
  },
  handleBorder: async border => {
    const [, response] = await requester(
      'GET',
      `alpha/${border}?${fields}`
    )
    dispatch(setCountry(response.data))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Country))
