import React, { useContext } from 'react'
import ShowMovie from './ShowMovie'
import Category from './Category'
import { Context } from '../context/Context'
import Italian from './Italian'
import Comedy from './Comedy'
import Romantic from './Romantic'

const Home = () => {

  const {movies} = useContext(Context)


  return (
    <>
      <ShowMovie />
      <Category prop={movies[0].popular} />
      <Italian prop={movies[0].italian_movies} />
      <Comedy prop={movies[0].comedy_movies} />
      <Romantic prop={movies[0].romantic_movies} />
    </>
  );
}

export default Home