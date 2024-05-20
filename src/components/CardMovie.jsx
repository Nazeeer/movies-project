import React from 'react'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import defaultImage from '../assets/images/defaultImage.jpeg'
const CardMovie = ({movie}) => {
  return (
    <Col sx="6" sm="6" md="4" lg="3" className='my-1'>
      <Link to={`movie/${movie.id}`}>
        <div className="card">
          {movie.poster_path == null ?<img src={defaultImage} className='card__image' alt="" /> :<img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} className='card__image' alt="" />}
              
              <div className="card__overlay">
                  <div className="overlay__text text-center w-100 p-2">
                      <p>Name :- {movie.title} </p>
                      <p>Release Date :-  {movie.release_date}</p>
                      <p>Vote Count :- {movie.vote_count}</p>
                      <p>Vote Average :- {movie.vote_average}</p>
                      
                  </div>
              </div>
          </div>
      </Link>

    </Col>
  )
}

export default CardMovie