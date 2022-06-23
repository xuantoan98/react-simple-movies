import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <section className="banenr h-[500px] page-container pb-10">
        <div className="w-full h-full rounded-lg bg-white relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/oSAoUoPMRBrMRlMLifLADecsMKw=/0x0:1920x1080/1400x933/filters:focal(887x293:1193x599):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64224190/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">Watch now</button>
          </div>
        </div>
      </section>

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
