import React, { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCard from "./MovieCard";

const MovieList = ({type = 'now_playing'}) => {
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=8383b5d0630bcdbd9b5c583f69bd3353&language=en-US&page=1`, fetcher);
    const movies = data?.results || [];

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