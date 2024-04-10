import {useDispatch} from 'react-redux';
import { API_OPTIONS } from '../utils/Constants';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMoviesMovies=()=>{

    const dispatch=useDispatch();

  const getPopularMoviesMovies=async()=> {
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
    API_OPTIONS);
    const json=await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
    getPopularMoviesMovies();
  },[]);
};

export default usePopularMoviesMovies;