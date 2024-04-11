import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMoviesMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


function Browse() {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMoviesMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header></Header>
      {
        showGptSearch ? <GptSearch /> : (
          <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
          </>
        )

      }
    </div>
  );
};

export default Browse;
