import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AnimeLists from "../components/AnimeLists";
import Menu from "../components/Menu";
import Skeleton from "../components/Skeleton";

function Home() {
  const [animeLists, setAnimeLists] = useState([]);
  const [animeTitle, setAnimeTitle] = useState(() => {
    return localStorage.getItem("animeTitle") || "";
  });
  const [isSearch, setIsSearch] = useState(() => {
    return JSON.parse(localStorage.getItem("isSearch")) ?? true;
  });
  const [isLoading, setIsLoading] = useState(true);

  const getAnimeLists = async (query) => {
    setIsLoading(true);
    try {
      const url = query
        ? `https://api.jikan.moe/v4/anime?q=${query}`
        : `https://api.jikan.moe/v4/top/anime`;
      const res = await fetch(url);
      const anime = await res.json();
      setAnimeLists(query ? anime.data : anime.data.slice(0, 12));
    } catch (error) {
      console.error("Error fetching anime list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("animeTitle", animeTitle);
    setIsSearch(false);
    localStorage.setItem("isSearch", JSON.stringify(false));
    getAnimeLists(animeTitle);
  };

  useEffect(() => {
    getAnimeLists(animeTitle);
  }, []);

  useEffect(() => {
    if (animeTitle === "") {
      localStorage.removeItem("animeTitle");
      setIsSearch(true);
      localStorage.setItem("isSearch", JSON.stringify(true));
      getAnimeLists();
    }
  }, [animeTitle]);

  return (
    <>
      <Header />
      <Menu
        onSubmit={HandleSearch}
        value={animeTitle}
        setAnimeTitle={setAnimeTitle}
        isSearch={isSearch}
      />
      <div className="content-wrapper">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} />)
          : animeLists.map((anime) => (
              <AnimeLists
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.image_url}
                url={anime.url}
                id={anime.mal_id}
              />
            ))}
      </div>
    </>
  );
}

export default Home;
