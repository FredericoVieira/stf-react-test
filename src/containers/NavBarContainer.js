import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setTheme } from '../actions/theme'
import NavBar from '../components/NavBar'


const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: (theme) => {
    const newtheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newtheme))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
