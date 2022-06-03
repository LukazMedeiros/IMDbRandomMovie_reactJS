import { AppRoutes } from "./appRoutes.jsx";

import { SearchContextProvider } from "./contexts/searchContext.jsx";
import { MovieDataContextProvider } from "./contexts/movieDataContext.jsx";
import { DarkModeContextProvider } from "./contexts/darkModeContext.jsx";

import "./styles/darkMode.css";

function App() {
  return (
    <DarkModeContextProvider>
      <MovieDataContextProvider>
        <SearchContextProvider>
          <AppRoutes />
        </SearchContextProvider>
      </MovieDataContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
