import React, { useState } from 'react';

function Details() {
  const [isHidden, setIsHidden] = useState(false);

  const anime = {
    title: "Attack on Titan",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      },
    },
    airing: true,
    score: 8.5,
    mal_id: 16498,
    aired: {
      from: "2013-04-07",
      to: "2024-09-27",
    },
    synopsis:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans...",
    studios: "Madhouse",
    source: "Manga",
    genres: ["Action", "Adventure", "Fantasy"],
    duration: "23 min. per ep.",
    rating: "PG-13 - Teens 13 or older",
    trailer: "https://www.youtube.com/embed/M_OauHnAFc8",
  };

  const WatchClick = () => {
    setIsHidden(true);
  };
  const CloseClick = () => {
    setIsHidden(false);
  };

  return (
    <div className="anime-details">
      <div className="anime-header">
        <img src={anime.images.jpg.image_url} alt={anime.title} className="anime-poster" />
        <div className="anime-info">
          <h1 className="anime-title">{anime.title}</h1>
          <p><strong>Airing:</strong> {anime.airing ? 'Yes' : 'No'}</p>
          <p><strong>Score:</strong> {anime.score || 'N/A'}</p>
          <p><strong>MAL ID:</strong> {anime.mal_id}</p>
          <p><strong>Airing Date:</strong> {`${anime.aired?.from} to ${anime.aired.to}`}</p>
          <p><strong>Studios:</strong> {anime.studios}</p>
          <p><strong>Source:</strong> {anime.source}</p>
          <p><strong>Genres:</strong> {anime.genres.join(', ')}</p>
          <p><strong>Duration:</strong> {anime.duration}</p>
          <p><strong>Rating:</strong> {anime.rating}</p>
        </div>
      </div>
      <div className="anime-synopsis">
        <h2>Synopsis</h2>
        <p>{anime.synopsis}</p>
      </div>
      <div className="anime-video">
        <a className="watch-btn" onClick={WatchClick}>Watch Trailer</a>
        {isHidden && (
            <div className="trailer">
                <button className='cls-btn' onClick={CloseClick}>x</button>
                <iframe
                  width="100%"
                  height="400"
                  src={anime.trailer}
                  allowFullScreen
                  title="Anime Trailer"
                />
            </div>
        )}
      </div>
    </div>
  );
}

export default Details;
