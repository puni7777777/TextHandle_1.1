import React, { useState } from 'react';
import './cards.css';

const animeData = [
    {
        title: 'Tonbo!',
        imageUrl: 'https://via.placeholder.com/150',
        episodes: 9,
        subtitles: 9,
        dubbed: 0,
    }, {
        title: 'Tonbo!',
        imageUrl: 'https://via.placeholder.com/150',
        episodes: 9,
        subtitles: 9,
        dubbed: 0,
    }, {
        title: 'Tonbo!',
        imageUrl: 'https://via.placeholder.com/150',
        episodes: 9,
        subtitles: 9,
        dubbed: 0,
    }, {
        title: 'Tonbo!',
        imageUrl: 'https://via.placeholder.com/150',
        episodes: 9,
        subtitles: 9,
        dubbed: 0,
    }, {
        title: 'Tonbo!',
        imageUrl: 'https://via.placeholder.com/150',
        episodes: 9,
        subtitles: 9,
        dubbed: 0,
    },

];

export default function Cards() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredAnime = animeData.filter((anime) => {
        if (selectedCategory === 'All') {
            return true;
        } else if (selectedCategory === 'Sub') {
            return anime.subtitles > 0;
        } else if (selectedCategory === 'Dub') {
            return anime.dubbed > 0;
        } else if (selectedCategory === 'Chinese') {
            return anime.chinese > 0;
        } else {
            return true;
        }
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <h1 className="text-4xl font-bold text-center mb-5">RECENTLY UPDATE</h1>
            <div className="flex justify-center mb-5">
                <button
                    className={`px-4 py-2 m-1 rounded-md ${selectedCategory === 'All'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleCategoryChange('All')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 m-1 rounded-md ${selectedCategory === 'Sub'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleCategoryChange('Sub')}
                >
                    Sub
                </button>
                <button
                    className={`px-4 py-2 m-1 rounded-md ${selectedCategory === 'Dub'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleCategoryChange('Dub')}
                >
                    Dub
                </button>
                <button
                    className={`px-4 py-2 m-1 rounded-md ${selectedCategory === 'Chinese'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleCategoryChange('Chinese')}
                >
                    Chinese
                </button>
                <button
                    className={`px-4 py-2 m-1 rounded-md ${selectedCategory === 'Trending'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleCategoryChange('Trending')}
                >
                    Trending
                </button>
            </div>

            <div className="flex flex-wrap">
                {filteredAnime.map((anime) => (
                    <div
                        className="w-1/3 p-2 md:p-4"
                        key={anime.title}
                    >
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img
                                src={anime.imageUrl}
                                alt={anime.title}
                                className="w-full h-48 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-xl font-bold mb-2">
                                {anime.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Episodes:</span>{' '}
                                {anime.episodes}
                                <span className="font-semibold mx-2">|</span>
                                <span className="font-semibold">Subtitles:</span>{' '}
                                {anime.subtitles}
                                <span className="font-semibold mx-2">|</span>
                                <span className="font-semibold">Dubbed:</span>{' '}
                                {anime.dubbed}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
