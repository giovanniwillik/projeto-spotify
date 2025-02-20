import React from 'react'
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SongList from './SongList';

const SearchResults = ({search, type, setSearch}) => {

    // Função para remover acentos
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const filteredSongs = songsArray.filter(song =>
        (removeAccents(song.name).includes(removeAccents(search)) || 
         removeAccents(song.artist).includes(removeAccents(search)))
    );
    
    const filteredArtists = artistArray.filter(artist =>
        removeAccents(artist.name).includes(removeAccents(search))
    );

    return (
        <div className="search-results">
            {/* Item List de Artistas */}
            {type === "artists" || type === undefined ? (
            <ItemList
                title= "Artistas"
                items={10}
                itemsArray={filteredArtists}
                path="/artists"
                idPath="/artist"
                search={search}
                pageType="SearchResults"
                setSearch={setSearch}
            />
            ) : (
            <></>
            )}

            {/* Item List de Músicas */}
            {type === "songs" || type === undefined ? (
            <SongList songsArray={filteredSongs} pageType="SearchResults"/>
            ) : (
            <></>
            )}
        </div>
  )
}

export default SearchResults;