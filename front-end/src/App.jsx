import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";
import SearchResults from "./components/SearchResults";
import SearchRedirect from "./components/SearchRedirect";
import Search from "./pages/Search";

const App = () => {

  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);
  

  useEffect(() => {
    if (search === undefined || search === "" || search === null) {
        setSearchError(false);
        return;
    }
    console.log(search);
  }, [search]);

  const isSearching = search && search.trim() !== "";

  return (
    <BrowserRouter>
      <Header setSearch = {setSearch}/>

      <Routes>
        <Route path="/" element={<SearchRedirect setSearch={setSearch} search={search} path="/"/>} />
        <Route path="/artists" element={<SearchRedirect setSearch={setSearch} search={search} path="/artists"/>} />
        <Route path="/artist/:id" element={<SearchRedirect setSearch={setSearch} search={search} path="/artist/:id"/>} />
        <Route path="/songs" element={<SearchRedirect setSearch={setSearch} search={search} path="/songs"/>} />
        <Route path="/song/:id" element={<SearchRedirect setSearch={setSearch} search={search} path="/song/:id"/>} />
        <Route path="/search" element={<Search setSearch={setSearch} search = {search}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
