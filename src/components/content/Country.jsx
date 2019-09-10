import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'

import { numberWithCommas } from '../../utils/formatter'


class Country extends React.Component {
  componentWillMount() {
    this.props.fetchCountry(this.props.match.params.country)
  }

  render() {
    const { selectedCountry, handleBorder, theme } = this.props

    const handleBorders = (border) => <Link
      key={border}
      className={`btn button border button--${theme}`}
      to={`/country/${border}`}
      onClick={() => handleBorder(border)}
    >
      {border}
    </Link>
    
    return (
      <section className={`country country--${theme}`}>
        <div className="row back">
          <div className="col s12">
            <Link className={`btn button button--${theme}`} to="/">
              <FontAwesomeIcon icon={faArrowLeft} size="lg"/> <span className="button__text">Back</span>
            </Link>
          </div>
        </div>
        { 'name' in selectedCountry ?
        <>
          <div className="row">
            <div className="col s12 m6">
              <img className="flag" src={selectedCountry.flag} />
            </div>
            <div className="col s12 m5 offset-m1">
              <span className="title">
                {selectedCountry.name}
              </span>
              <p className="block">
                <span className="info">Native Name: </span>{selectedCountry.nativeName}
              </p>
              <p className="block">
                <span className="info">Population: </span>{numberWithCommas(selectedCountry.population)}
              </p>
              <p className="block">
                <span className="info">Region: </span>{selectedCountry.region}
              </p>
              <p className="block">
                <span className="info">Capital: </span>{selectedCountry.capital}
              </p>
              <p className="block">
                <span className="info">Top Level Domain: </span>{selectedCountry.topLevelDomain.join(', ')}
              </p>
              <p className="block">
                <span className="info">Currencies: </span>{selectedCountry.currencies.map(currency => currency.name).join(',')}
              </p>
              <p className="block">
                <span className="info">Languages: </span>{selectedCountry.languages.map(language => language.name).join(', ')}
              </p>
              <p className="block">
                <span className="info">Borders: </span>{selectedCountry.borders.length > 0 ? selectedCountry.borders.map(border => handleBorders(border)) : 'None'}
              </p>
              
            </div>
          </div>
        </> : 
        <Loader
          className="loader"
          type="Grid"
          color={theme === 'light' ? '#CCC' : '#FFF'}
          height={80}
          width={80}
        /> }
    </section>
    )
  }
}

export default Country