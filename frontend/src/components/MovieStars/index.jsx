import { ReactComponents as MovieStars} from 'assets/img/star-full.svg';
import {ReactComponents as MovieStars} from 'assets/img/star-half';
import { ReactComponents as MovieStars} from 'assets/img/star-empty';


import './styles.css';
a
function MovieStars() {
      
  return(
       <div className="dsmovie-stars-container">
       <StarFull />
       <StarFull />
       <StarFull />
       <StarHalf />
       <StarEmpty />
     </div>
)
}
export default MovieStars;