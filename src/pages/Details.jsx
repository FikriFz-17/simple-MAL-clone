import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const [isHidden, setIsHidden] = useState(false);
  const [detailedAnime, setDetailedAnime] = useState(null);

  const getId = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
      const detailAnime = await res.json();
      setDetailedAnime(detailAnime.data);
    } catch (error) {
      console.error("Error fetching anime details:", error);
    }
  };

  useEffect(() => {
    getId();
  }, [params.id]);

  if (!detailedAnime) {
    return <div>Loading...</div>; 
  }

  const WatchClick = () => {
    setIsHidden(true);
  };
  const CloseClick = () => {
    setIsHidden(false);
  };

  return (
    <div className="anime-details">
      <div className="anime-header">
        <img src={detailedAnime.images.jpg.image_url} alt={detailedAnime.title} className="anime-poster" />
        <div className="anime-info">
          <h1 className="anime-title">{detailedAnime.title}</h1>
          <p><strong>Airing:</strong> {detailedAnime.airing ? 'Yes' : 'No'}</p>
          <p><strong>Score:</strong> {detailedAnime.score || 'N/A'}</p>
          <p><strong>MAL ID:</strong> {detailedAnime.mal_id}</p>
          <p><strong>Airing Date:</strong> {`${detailedAnime.aired.string}`}</p>
          <p><strong>Studios:</strong> {detailedAnime.studios.map((studio) => studio.name).join(', ')}</p>
          <p><strong>Source:</strong> {detailedAnime.source}</p>
          <p><strong>Genres:</strong> {detailedAnime.genres.map((genre) => genre.name).join(', ')}</p>
          <p><strong>Duration:</strong> {detailedAnime.duration}</p>
          <p><strong>Rating:</strong> {detailedAnime.rating}</p>
        </div>
      </div>
      <div className="anime-synopsis">
        <h2>Synopsis</h2>
        <p>{detailedAnime.synopsis}</p>
      </div>
      <div className="anime-video">
        <a className="watch-btn" onClick={WatchClick}>Watch Trailer</a>
        {isHidden && (
          <div className="trailer">
            <button className="cls-btn" onClick={CloseClick}>x</button>
            <iframe
              width="100%"
              height="400"
              src={detailedAnime.trailer.embed_url}
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
