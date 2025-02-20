import React from "react";
import Main from "../components/Main";

const Songs = ({search, setSearch}) => {
  return <Main type="songs" search={search} setSearch={setSearch}/>;
};

export default Songs;
