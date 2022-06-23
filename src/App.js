import { Fragment } from "react";
import "swiper/scss";
import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <Banner></Banner>

      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">Now Playing</h2>
        <MovieList></MovieList>
      </section>

      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
