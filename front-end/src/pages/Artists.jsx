import React from "react";
import Main from "../components/Main";

const Artists = ({search, setSearch}) => {
  return <Main type="artists" search={search} setSearch={setSearch}/>;
};

export default Artists;
