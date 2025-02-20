import React, {useState, useEffect} from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from "../pages/Home"
import Artists from "../pages/Artists";
import Artist from "../pages/Artist";
import Songs from "../pages/Songs";
import Song from "../pages/Song";
import SearchResults from "./SearchResults";

const SearchRedirect = ({ search, setSearch, path }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (search.trim() !== "") {
        navigate("/search");
      }
    }, [search, navigate]);
  
    if (path === "/") {
      return <Home setSearch={setSearch} search={search} />
    }
    
    if (path === "/artists") {
      return <Artists setSearch={setSearch} search={search} />
    }
    
    if (path === "/artist/:id") {
      return <Artist setSearch={setSearch} search={search} />
    }

    if (path === "/songs") {
      return <Songs setSearch={setSearch} search={search} />
    }

    if (path === "/song/:id") {
      return <Song setSearch={setSearch} search={search} />
    }
  }

  export default SearchRedirect;