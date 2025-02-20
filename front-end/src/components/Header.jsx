import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({setSearch}) => {

  const clearSearch = () => {
    inputRef.current.value = "";  // Limpa o campo de input
    setSearch(""); // Atualiza o estado de pesquisa
    inputRef.current.blur(); // Opcional: Remove o foco
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => {clearSearch()}}>
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <SearchBar setSearch = {setSearch}/>

      <Link to="/" className="header__link" onClick={() => {clearSearch()}}>
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
