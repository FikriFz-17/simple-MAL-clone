import { useState, useEffect } from 'react';
import Header from '../components/Header';
import AnimeLists from '../components/AnimeLists';
import Menu from '../components/Menu';

function Home() {
    const [animeLists, setAnimeLists] = useState([]);
    const [animeTitle, setAnimeTitle] = useState("");
  
    const getAnimeLists = async (query) => {
      try {
        const url = query ? `https://api.jikan.moe/v4/anime?q=${query}` : `https://api.jikan.moe/v4/top/anime`
        const res = await fetch(url);
        const anime = await res.json();
        setAnimeLists(anime.data.slice(0, 12));
      } catch (error) {
        console.error("Error fetching anime list:", error);
      }
    };
  
    const HandleSearch = (e) => {
      e.preventDefault()
      getAnimeLists(animeTitle)
    }
  
    useEffect(() => {
      if (animeTitle === "") {
        getAnimeLists();
      }
    }, [animeTitle]);
  
    useEffect(() => {
      getAnimeLists();
    }, []);
  
    return (
      <>
        <Header />
        <Menu onSubmit={HandleSearch} value={animeTitle} setAnimeTitle={setAnimeTitle}/>
        <div className="content-wrapper">
          {animeLists.map((anime) => (
            <AnimeLists
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              url={anime.url}
            />
          ))}
        </div>
      </>
    );
}

export default Home
