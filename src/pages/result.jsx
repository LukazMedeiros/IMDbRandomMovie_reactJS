import { useContext, useEffect, useState } from "react";
import { MovieDataContext } from "../contexts/movieDataContext.jsx";
import { SearchContext } from "../contexts/searchContext.jsx";
import { getImdbId } from "../services/getImdbId.js";
import { getImdbMovieData } from "../services/getImdbMovieData.js";

import "../styles/result.scss";

export function Result() {
  const [isLoading, set_isLoading] = useState(true);
  const { genre, year } = useContext(SearchContext);
  const {
    set_id,
    title,
    set_title,
    rating,
    set_rating,
    runtime,
    set_runtime,
    genres,
    set_genres,
    countries,
    set_countries,
    languages,
    set_languages,
    description,
    set_description,
    image,
    set_image,
    actors,
    set_actors,
  } = useContext(MovieDataContext);

  async function getMovieInfo(genre, year) {
    const id = await getImdbId(genre, year);
    const movieData = await getImdbMovieData(id);
    window.history.pushState({}, "movie", `/${id}`);
    return movieData;
  }

  useEffect(() => {
    getMovieInfo(genre, year).then((data) => {
      console.log(data);
      // set_id(data.id);
      set_title(data.title);
      set_rating(data.rating);
      set_runtime(data.runtime);
      set_genres(data.genres.join());
      set_countries(data.countries.join());
      set_languages(data.languages.join());
      set_description(data.description);
      set_image(data.image);

      const actors = data.actors.map((actor) => {
        return actor.name;
      });

      set_actors(actors.join());
      set_isLoading(false);
    });

    return () => {};
  }, [
    genre,
    year,
    set_id,
    set_title,
    set_rating,
    set_runtime,
    set_genres,
    set_countries,
    set_languages,
    set_description,
    set_image,
    set_actors,
    set_isLoading,
  ]);

  if (isLoading) {
    return <p>carregando</p>;
  } else {
    return (
      <div id="result">
        <div className="image__container">
          <img src={image} alt={`${title} movie poster`} />
        </div>
        <div className="info__container">
          <h1>{title}</h1>
          <ul>
            <li>
              <span>rating</span>
              <p>{rating}</p>
            </li>
            <li>
              <span>Run Time</span>
              <p>{runtime}</p>
            </li>
            <li>
              <span>genres</span>
              <p>{genres}</p>
            </li>
            <li>
              <span>countries</span>
              <p>{countries}</p>
            </li>
            <li>
              <span>languages</span>
              <p>{languages}</p>
            </li>
            <li>
              <span>description</span>
              <p>{description}</p>
            </li>
            <li>
              <span>actors</span>
              <p>{actors}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
