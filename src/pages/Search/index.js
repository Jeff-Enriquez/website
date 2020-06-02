import React, { useState, useRef } from 'react'
import useStyles from './styles.js'

const Search = () => {
  const [displayOption, setDisplayOption] = useState('')
  const closeDisplayOption = useRef(null)

  const classes = useStyles()

  const selectOption = (option) => {
    setDisplayOption(option)
    closeDisplayOption.current.focus()
  }

  return (
    <div className={classes.page}>
      <p className={classes.link}>About / Adding Projects to the Index</p>
      <h1 className={classes.heading}>Adding Projects to the Index</h1>
      <input className={classes.search} placeholder='Search the Civic Tech Index'></input>
      <p className={classes.results}>Showing X of X Results matching:</p>
      <p className={classes.resultsFor}>"Hack for LA"</p>
      <div className={classes.select}>

      </div>
      <span ref={closeDisplayOption} tabIndex='0'></span>
      <div className={classes.select} tabIndex='0'>
        {
          displayOption ?
          <>
            <p className={classes.sortByCorner}>Sort By:</p>
            <p className={classes.displayOption}>{displayOption}</p>
          </>
          :
          <>
            <p className={classes.sortByCenter}>Sort By:</p>
          </>
        }
        <div className={classes.optionsContainer}>
          <div onClick={() => selectOption('Best Match')} className={classes.option}><p className={classes.optionText}>Best Match</p></div>
          <div onClick={() => selectOption('Last Updated')} className={classes.option}><p className={classes.optionText}>Last Updated</p></div>
          <div onClick={() => selectOption('Stargazer Count')} className={classes.option}><p className={classes.optionText}>Stargazer Count</p></div>
          <div onClick={() => selectOption('New Issues Count')} className={classes.option}><p className={classes.optionText}>New Issues Count</p></div>
          <div onClick={() => selectOption('Good First Issue(s)')} className={classes.option}><p className={classes.optionText}>Good First Issue(s)</p></div>
        </div>
        <img className={classes.arrow} src='/images/link-arrow.png' alt='drop down arrow'/>
      </div>
    </div>
  )
}

export default Search