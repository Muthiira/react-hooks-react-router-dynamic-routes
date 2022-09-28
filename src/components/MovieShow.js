import React from "react";
import {useParams} from "react-router-dom";


function MovieShow({movies}) {
	// call use params to access params
	const param = useParams();
	console.log(param);
  return (
    <div>
		{/* we access movieID stores in param to render information about the selected movies */}

      <h3>{movies[param.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;
