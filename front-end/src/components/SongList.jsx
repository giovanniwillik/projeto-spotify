import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray, pageType, search }) => {
  // const items = 5;
  const [items, setItems] = useState(5);

  // items = 10
  // setItems(10)

  // console.log(items);
  // items +=  5

  return (
    <div className="song-list">
      <div className="song-list__title">
        {pageType === "SearchResults" ? (<h2>Músicas</h2>) : (<></>)}
      </div>
      <div className="song-list__subtitle">
        {(pageType === "SearchResults") && (songsArray.length === 0) ? (<h4>Não foi encontrada nenhuma música</h4>) : (<></>)}
        {(pageType === "SearchResults") && (songsArray.length === 1) ? (<h4>1 música foi encontrada</h4>) : (<></>)}
        {(pageType === "SearchResults") && (songsArray.length > 1) ? (<h4>{`${songsArray.length} músicas foram encontradas`}</h4>) : (<></>)}
      </div>
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} search={search} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
          // items += 5;
          // console.log(items);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
