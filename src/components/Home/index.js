import React from 'react'
import useStyles from './styles.js'

const Home = () => {
  const classes = useStyles()

  return (
    <>
    <section className={classes.mainSection}>
      <h1 className={classes.heading}>Join a worldwide movement to catalog every open source civic tech project.</h1>
      <div className={classes.listContainer}>
        <div className={classes.listItemContainer}>
          <div className={classes.listItemCircle}></div>
          <p className={classes.listItemText}>Requires no coding</p>
        </div>
        <div className={classes.listItemContainer}>
          <div className={classes.listItemCircle}></div>
          <p className={classes.listItemText}>Display a customized index on any site</p>
        </div>
        <div className={classes.listItemContainer}>
          <div className={classes.listItemCircle}></div>
          <p className={classes.listItemText}>Index is owned by all who use it</p>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button className={`${classes.btn} ${classes.black}`}>Tag Your Project</button>
        <button className={classes.btn}>Learn More</button>
      </div>
    </section>
    <section className={classes.ctiSection}>
      <div className={classes.ctiContainer}>
        <h2 className={classes.ctiHeading}>Civic Tech Index is used by:</h2>
        <div className={classes.ctiImgsContainer}>
          <a href='#'><img className={classes.ctiImgs} src='/images/code-for-all.png' alt='code for all' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/democracy-lab.svg' alt='democracy lab' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/code-for-america.svg' alt='code for america' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/yale-openlab.svg' alt='yale openlab' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/open-oakland.svg' alt='open oakland' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/hack-for-la.png' alt='hack for la' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/open-savannah.png' alt='open savannah' /></a>
          <a href='#'><img className={classes.ctiImgs} src='/images/open-san-diego.svg' alt='open san diego' /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home