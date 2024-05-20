import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Row , Col } from 'react-bootstrap'
import {Link , useParams} from 'react-router-dom'
import defaultImage from '../assets/images/defaultImage.jpeg'
const MovieDetails = () => {
    const params = useParams();
    // console.log(params.id);

    const [movieDetail ,setMovieDetail] =useState([])

    const getMovieData = async()=>{
        const response =await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
        setMovieDetail(response.data)
        console.log(response.data);
    }

    useEffect(()=>{
        getMovieData()
    },[])
  return (
    <div >
        <Row className='justify-content-center'>
            <Col md="12" xs="12" sm="12" className='mt-4'>
                <div className="card-detalis d-flex align-items-center">
                {movieDetail.poster_path == null ?<img src={defaultImage} className='img-movie w-30' alt="" /> :<img src={`https://image.tmdb.org/t/p/w500`+movieDetail.poster_path} className='img-movie w-30' alt="" />}

                    <div className="justify-content-center text-center mx-auto">
                        <p className="card-text-details border-bottom ">
                            Name :- {movieDetail.original_title}
                        </p>
                        <p className="card-text-details border-bottom ">Release Date :- {movieDetail.release_date} </p>
                        <p className="card-text-details border-bottom ">Vote Count :- {movieDetail.vote_count}</p>
                        <p className="card-text-details border-bottom ">Vote Average :- {movieDetail.vote_average} </p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='justify-content-center'>
            <Col md="12" xs="12" sm="12" className='mt-3'>
                <div className="card-story d-flex flex-column align-items-start ">
                    <div className="text-end px-4">
                        <p className="card-text-title border-bottom">Story </p>
                    </div>
                    <div className="text-end px-4">
                        <p className="card-text-title border-bottom">{movieDetail.overview}</p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='justify-content-center'>
            <Col md="10" xs="12" sm="12" className='mt-5 d-flex justify-content-center mb-3 '>
                <Link to="/">
                    <button style={{backgroundColor:"#224f61" , border:"none"}} className='btn btn-primary mx-2'>Back</button>
                    </Link>

                <a href={movieDetail.homepage} target='_blank'>
                    <button style={{backgroundColor:"#224f61" , border:"none"}} className='btn btn-primary mx-2'>View Film</button>
                </a>
            </Col>
        </Row>
    </div>
  )
}

export default MovieDetails