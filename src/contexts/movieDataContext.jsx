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
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
}
