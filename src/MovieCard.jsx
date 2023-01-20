import placeHolder from './placeholder.png';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      <div className='movie-info'>
        <div className='movie-year'>{movie.Year}</div>
        <div className='movie-img'>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : placeHolder}></img>
        </div>
        <div className='movie-genre'>{movie.Type}</div>
      </div>
      <div className='movie-name'>{movie.Title}</div>
    </div>
  );
};

export default MovieCard;
