import React from 'react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';

const MoviePage = () => {

    const { data } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=8383b5d0630bcdbd9b5c583f69bd3353&language=en-US&page=1`, fetcher);
    const movies = data?.results || [];

    return (
        <div className=" py-10">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input type="text" className='w-full p-4 bg-slate-800 text-white outline-none' placeholder='Type here to search ...' />
                </div>

                <button className='p-4 bg-primary text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-4 gap-10">
                {movies.length > 0 && movies.map(item => (
                    <MovieCard item={item}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;