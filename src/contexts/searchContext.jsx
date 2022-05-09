import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [genre, set_genre] = useState("");
  const [year, set_year] = useState("");
  return (
    <SearchContext.Provider value={{ genre, set_genre, year, set_year }}>
      {children}
    </SearchContext.Provider>
  );
}
