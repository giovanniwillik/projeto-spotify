import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, artist, audio, _id, index, search}) => {
  return (
    <Link to={`/song/${_id}`} className="song-item" onClick={(setSearch) => {setSearch(false)}}>
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
