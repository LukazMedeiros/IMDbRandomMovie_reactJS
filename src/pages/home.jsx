import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/searchContext.jsx";
//
import { getGenres } from "../services/getGenres.js";
//
export function Home() {
  const page = useNavigate();
  const { set_genre, set_year } = useContext(SearchContext);
  const [list_options, set_list_options] = useState([]);

  useEffect(() => {
    getGenres().then((genres) => {
      set_list_options(genres);
    });

    return () => {};
  }, []);

  function handle_submit(event) {
    event.preventDefault();
    page("/result");
  }

  return (
    <div id="home">
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
    </div>
  );
}
