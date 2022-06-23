import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`, fetcher);

    if (!data) return null;
    const {
        backdrop_path,
        poster_path,
        title,
        genres,
        overview
    } = data;

    return (
        <div className='py-10'>
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
                >
                </div>
            </div>

            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className='w-full h-full object-cover rounded-lg' />
            </div>

            <h1 className='text-center text-white text-4xl font-bold pb-10'>{title}</h1>

            {genres.length > 0 && (
                <div className="flex items-center justify-center gap-x-5 mb-10">
                    {genres.map(item => (
                        <span key={item.id} className="py-2 px-4 border rounded text-primary border-primary">{item.name}</span>
                    ))}
                </div>
            )}

            <p className="text-center max-w-[800px] mx-auto mb-10">{overview}</p>

            <MovieCredits></MovieCredits>
            <MovieVideos></MovieVideos>
        </div>
    );
};

function MovieCredits() {
    const { movieId } = useParams();
    const { data, error } = useSWR(` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`, fetcher);

    if (!data) return null;
    const { cast } = data;
    if (!cast && cast.length <= 0) return null;

    return (
        <>
            <h2 className='text-center text-2xl mb-10'>Casts</h2>
            <div className="grid grid-cols-4 gap-x-5">
                {cast.slice(0, 4).map(item => (
                    <CastsItem item={item} key={item.id}></CastsItem>
                ))}
            </div>
        </>
    );
}

function CastsItem({ item }) {
    const {
        profile_path,
        name
    } = item;
    return (
        <div className='cast-item'>
            <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="" className='w-full h-[350px] object-cover rounded-lg mb-3' />
            <h3 className='text-left text-xl font-medium'>{name}</h3>
        </div>
    );
}

function MovieVideos() {
    const { movieId } = useParams();
    const { data, error } = useSWR(` https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`, fetcher);

    if (!data) return null;

    const { results } = data;

    if (!results && results.length <= 0) return null;

    return (
        <div className='py-10'>
            <div className="flex flex-col gap-10">
                {results.slice(0, 2).map(item => (
                    <div className="" key={item.id}>
                        <h3 className='mb-5 text-xl font-medium p-3 bg-secondary inline-block'>{item.name}</h3>
                        <div key={item.id} className="w-full aspect-video">
                            <iframe
                                width="1280"
                                height="720"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='w-full h-full object-fill'>

                            </iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieDetailsPage;