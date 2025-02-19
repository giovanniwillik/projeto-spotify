import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isOnFocus, setIsOnFocus] = useState(false);
    const inputRef = useRef(null)

    return (
        <div className="search-bar-container">
            <div className="search-wrapper">
                {/* Ícone de lupa dentro do input */}
                <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="search-icon" 
                onClick={() => {
                    if (isOnFocus) {
                        setSearch(inputRef.current.value); // Atualiza o estado de pesquisa
                        inputRef.current.blur(); // Remove o foco do input
                        setIsOnFocus(false);
                    } else {
                        inputRef.current.focus(); // Adiciona o foco no input
                        setIsOnFocus(true);
                    }
                }}
                />

                {/* Campo de pesquisa */}
                <input
                    type="search"
                    placeholder="What do you want to hear?"
                    className="search-bar"
                    ref={inputRef}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            setSearch(event.target.value);
                        }
                    }}
                    onBlur={(event) => {
                        setSearch(event.target.value);
                    }}
                    onInput={(event) => {
                        if (event.target.value === "") {
                            setSearch("");
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default SearchBar;
