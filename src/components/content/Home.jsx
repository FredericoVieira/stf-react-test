import React from 'react'
import { Link } from 'react-router-dom'
import Search from 'react-search-box'
import Select from 'react-select'
import Loader from 'react-loader-spinner'

import { numberWithCommas } from '../../utils/formatter'
import { shuffle } from '../../utils/shuffler'


class Home extends React.Component {
  componentWillMount() {
    if (this.props.countries.length === 0) this.props.fetchCountries()
  }

  render() {
    const {
      countries,
      handleSearchCountry,
      selectedRegion,
      regions,
      handleFilterRegion,
      handleSelectCountry,
      theme,
      history,
    } = this.props

    let countriesEligibles, countriesToShow, countriesLoaded, countriesSearch

    if (countries.length > 0) {
      countriesLoaded = true
      
      if (selectedRegion) {
        countriesEligibles = countries.filter(country => country.region === selectedRegion)
      } else countriesEligibles = countries
      
      countriesSearch = countriesEligibles.map(country => Object.assign({}, { key: country.name }, { value: country.name }))
      countriesToShow = shuffle(countriesEligibles)
    }

    const handleCountry = (country) => (
      <div key={country.name} className="col s12 m6 l4 xl3">
        <Link to={`/country/${country.name}`} onClick={() => handleSelectCountry()}>
          <div className="card">
            <div className="card-image">
              <img src={country.flag} />
            </div>
            <div className={`card-content card-content--${theme}`}>
              <span className="card-title">
                {country.name}
              </span>
              <p>
                <span className="card-info">Population: </span>{numberWithCommas(country.population)}
              </p>
              <p>
                <span className="card-info">Region: </span>{country.region}
              </p>
              <p>
                <span className="card-info">Capital: </span>{country.capital}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
    
    return (
      <section className={`home home--${theme}`}>
      {countriesLoaded ?
        <>
          <div className="row search-filter">
            <div className={`col s12 m6 l5 xl5 search search--${theme}`}>
              <Search
                placeholder="Search for a country..."
                data={countriesSearch}
                onSelect={(selection) => handleSearchCountry(selection, history)}
              />
            </div>
            <div className="col s12 m6 l3 xl3 filter-float">
              <Select
                className={`filter filter--${theme}`}
                classNamePrefix={`filter--${theme}`}
                placeholder="Filter by Region"
                value={selectedRegion}
                onChange={handleFilterRegion}
                options={regions}
              />
            </div>
          </div>
          <div className="row">
            {countriesToShow.map(country => handleCountry(country))}
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

export default Home