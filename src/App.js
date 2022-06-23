import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={ <Main></Main> }>
          {/* Route Home Page */}
          <Route path="/" element={ 
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
           }></Route>
          {/* Route List Movie */}
          <Route path="/movies" element={ <MoviePage></MoviePage> }></Route>

           {/* Route Detail Movie */}
          <Route path="/movie/:movieId" element={ <MovieDetailsPage></MovieDetailsPage> }></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
