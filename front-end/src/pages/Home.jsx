import React from "react";
import Main from "../components/Main";

const Home = ({search, setSearch}) => {
  return <Main search = {search} setSearch={setSearch}/>;
};

export default Home;
