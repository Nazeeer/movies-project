import './App.css';
import MoviesList from './components/MoviesList';
import NavbarComponent from './components/NavbarComponent';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
function App() {

  const [movies , setMovies] = useState([]);
  const [pageCount , setPageCount] = useState(0);


  // get all movie by axios
  const getAllMovies =async ()=>{
    const request = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1");
    console.log(request.data.results);
    setMovies(request.data.results);
    setPageCount(request.data.total_pages)
  }

  // pagination
  const choosePageNumber =async (number)=>{
    const request =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=${number}`);
    setMovies(request.data.results)
    setPageCount(request.data.total_pages)
  }


  useEffect(()=>{
    getAllMovies();
    console.log(movies);
  },[])

  // nav search
  const search= async(word)=>{
    if(word === ''){
      getAllMovies();
    }else{
    const request =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&query=${word}`)
    setMovies(request.data.results);
    setPageCount(request.data.total_pages)
  }
  }



  return (
    <div className='font color-body'>
        <NavbarComponent search={search}/>
        
        <Container>
          <BrowserRouter>
          
          {
            movies.length >=1 ? <>
            <Routes>
              <Route path="/" element={<MoviesList pageCount={pageCount} choosePageNumber={choosePageNumber} movies={movies}/>}/>
              <Route path='movie/:id' element={<MovieDetails />}/>
            </Routes>
            </>
            : <div className='vh-100 d-flex align-items-center justify-content-center'>
            <i className='ri-loader-4-fill icon'></i>
        </div>
          }
          </BrowserRouter>
          
        </Container>
    </div>
  );
}

export default App;
