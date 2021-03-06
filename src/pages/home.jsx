import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header.jsx";
import { MovieDataContext } from "../contexts/movieDataContext.jsx";
import { SearchContext } from "../contexts/searchContext.jsx";
//
import { getGenres } from "../services/getGenres.js";
//
import "../styles/home.scss";
//
export function Home() {
  const page = useNavigate();
  const {
    set_id,
    set_title,
    set_rating,
    set_genres,
    set_runtime,
    set_countries,
    set_languages,
    set_description,
    set_image,
    set_actors,
  } = useContext(MovieDataContext);
  const { set_genre, set_year } = useContext(SearchContext);
  const [list_options, set_list_options] = useState([]);

  useEffect(() => {
    getGenres().then((genres) => {
      set_list_options(genres);
    });

    set_id("");
    set_title("");
    set_rating("");
    set_genres("");
    set_runtime("");
    set_countries("");
    set_languages("");
    set_description("");
    set_image("");
    set_actors("");

    return () => {};
  }, [
    set_id,
    set_title,
    set_rating,
    set_genres,
    set_runtime,
    set_countries,
    set_languages,
    set_description,
    set_image,
    set_actors,
  ]);

  function handle_submit(event) {
    event.preventDefault();
    page("/result");
  }

  return (
    <div id="home">
      <Header />
      <main>
        <form onSubmit={handle_submit}>
          <div className="form__control">
            <label htmlFor="genre">select a genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              list="genres"
              onChange={(event) => set_genre(event.target.value)}
              required
            />
            <datalist id="genres">
              {list_options.map((item) => (
                <option value={item} key={item} />
              ))}
            </datalist>
          </div>
          <div className="form__control">
            <label htmlFor="year">select a year</label>
            <input
              type="number"
              id="year"
              name="year"
              min={1985}
              max={new Date().getFullYear()}
              onChange={(event) => set_year(event.target.value)}
              required
            />
          </div>
          <div className="form__control">
            <input type="submit" value="search" />
          </div>
        </form>
      </main>
    </div>
  );
}
