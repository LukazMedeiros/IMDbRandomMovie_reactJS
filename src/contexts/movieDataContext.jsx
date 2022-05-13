import { createContext, useState } from "react";

export const MovieDataContext = createContext();

export function MovieDataContextProvider({ children }) {
  const [id, set_id] = useState("");
  const [title, set_title] = useState("");
  const [rating, set_rating] = useState("");
  const [runtime, set_runtime] = useState("");
  const [genres, set_genres] = useState([]);
  const [countries, set_countries] = useState([]);
  const [languages, set_languages] = useState([]);
  const [description, set_description] = useState("");
  const [image, set_image] = useState("");
  const [actors, set_actors] = useState([]);

  return (
    <MovieDataContext.Provider
      value={{
        id,
        title,
        rating,
        genres,
        runtime,
        countries,
        languages,
        description,
        image,
        actors,
        //
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
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
}
