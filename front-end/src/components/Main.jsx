import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type, search, setSearch}) => {
  const [artistItems, setArtistItems] = useState(Infinity);
  const [songItems, setSongItems] = useState(Infinity);

  const shuffleArray = (array) => {
    const shuffled = [...array]; // Cria uma cópia do array original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
    }
    return shuffled;
 };

  useEffect(() => {
    if (type === undefined) {
      const calculateItems = () => {
        const containerWidth = document.querySelector('.main').clientWidth;
        const itemWidth = 172; // Largura mínima de um item
        const gap = 16; // Espaço entre os itens
        const availableWidth = containerWidth - 32; // Subtraindo o padding lateral (16px de cada lado)
        
        const itemsPerRow = Math.floor((availableWidth + gap) / (itemWidth + gap));
        
        setArtistItems(itemsPerRow * 2); // 2 linhas para artistas
        setSongItems(itemsPerRow * 3); // 3 linhas para músicas
      };
  
      calculateItems();
      window.addEventListener('resize', calculateItems);
  
      return () => window.removeEventListener('resize', calculateItems);
    }
  }, []);

  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={artistItems}
          itemsArray={shuffleArray(artistArray)}
          path="/artists"
          idPath="/artist"
          search={search}
          pageType="Main"
          setSearch={setSearch}
        />
      ) : (
        <></>
      )}

      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={songItems}
          itemsArray={shuffleArray(songsArray)}
          path="/songs"
          idPath="/song"
          search={search}
          pageType="Main"
          setSearch={setSearch}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;