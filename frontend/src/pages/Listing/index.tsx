/* eslint-disable @typescript-eslint/no-unused-vars */
import MovieCard from "components/MovieCard";

import Pagination from "components/Pagination";

function Listing() {
  return (
    <>
      
      <Pagination />
      
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>

    </>
  );
}

export default Listing;
