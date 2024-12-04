import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/TvShows" element={<TvShows />} />
          <Route
            path="/TvShows/MovieDetails/:movieId"
            element={<MovieDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
