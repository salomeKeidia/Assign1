import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredits from "../components/movieCredits";

const MovieCreditsPage = (props) => {
  let location = useLocation();
  console.log(location);

  const {movie, review } = location.state;

  
  return (
    <PageTemplate movie={movie}>
      <MovieCredits review={review} />
    </PageTemplate>
  );
};

export default MovieCreditsPage;