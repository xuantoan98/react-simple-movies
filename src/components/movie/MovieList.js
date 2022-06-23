import React, { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const { data, error } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=8383b5d0630bcdbd9b5c583f69bd3353&language=en-US&page=1', fetcher);

    useEffect( () => {
        if(data && data.results) setMovies(data.results);
    }, [data]);

    return (
        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
            { movies.length > 0 && movies.map(item => (
                <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

export default MovieList;