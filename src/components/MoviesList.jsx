import React from 'react'
import {  Row  } from 'react-bootstrap'
import CardMovie from './CardMovie'
import NotFound from './NotFound'
import PaginationComponent from './PaginationComponent'
import RatingsComponent from './RatingsComponent'
const MoviesList = ({movies,choosePageNumber,pageCount}) => {
  return (
    <Row className="mt-3"> 
    {movies.length >=1 ? movies.map((movie,i)=> <CardMovie movie={movie} key={i}/> ): <NotFound/>}
    <RatingsComponent/>
    {movies.length ?  <PaginationComponent pageCount={pageCount} choosePageNumber={choosePageNumber}/>: null}
    </Row>
  )
}

export default MoviesList