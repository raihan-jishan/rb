    import React from 'react'
    import classes from '../styles/pages.module.css';
    import Crushc from '../components/Crush';
    const Crush = () => {
      return (
        <div>
        <main className={classes.main}>
    <div className={classes.container}>
      <Crushc />
    </div>
    </main>
    </div>
      )
    }

    export default Crush;