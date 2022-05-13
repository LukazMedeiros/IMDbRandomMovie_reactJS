import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home.jsx";
import { Result } from "./pages/result.jsx";
import { MovieById } from "./pages/movieById.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<MovieById />} />
      </Routes>
    </BrowserRouter>
  );
}
