import MovieScore from "components/MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/thumbnail/ff65a81adcb911eab4e810ddb1aba44f.jpeg",
        title: "Shazam",
        count: 2,
        score: 4.5
    };

    const movie = {
        id: 1,
        image: "https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/thumbnail/ff65a81adcb911eab4e810ddb1aba44f.jpeg",
        title: "Shazam",
        count: 2,
        score: 4.5
    };

  return (
    
    <div>
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
    </div>
</div>

);
}

export default MovieCard;