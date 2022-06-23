import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apiKey, fetcher } from '../config';
import useDebounce from '../hooks/useDebounce';

const MoviePage = () => {

    const [ filter, setFilter ] = useState("");
    const [ url, setUrl ] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChange = (e) => {

        setFilter(e.target.value);
    }

    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;

    useEffect(() => {
        if (filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`);
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        }
    }, [filterDebounce]);

    const movies = data?.results || [];

    return (
        <div className=" py-10">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input 
                        type="text" 
                        className='w-full p-4 bg-slate-800 text-white outline-none' 
                        placeholder='Type here to search ...'
                        onChange={handleFilterChange} />
                </div>

                <button className='p-4 bg-primary text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            { loading && (
                <div className='w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin'></div>
            )}

            <div className="grid grid-cols-4 gap-10">
                { !loading && movies.length > 0 && movies.map(item => (
                    <MovieCard item={item} key={item.id}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;