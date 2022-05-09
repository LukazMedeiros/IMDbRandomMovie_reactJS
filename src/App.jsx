import { AppRoutes } from "./appRoutes.jsx";

import { SearchContextProvider } from "./contexts/searchContext.jsx";
import { MovieDataContextProvider } from "./contexts/movieDataContext.jsx";

function App() {
  return (
    <MovieDataContextProvider>
      <SearchContextProvider>
        <AppRoutes />
      </SearchContextProvider>
    </MovieDataContextProvider>
  );
}

export default App;
