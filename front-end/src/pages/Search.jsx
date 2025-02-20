import React from 'react'
import SearchResults from '../components/SearchResults'

const Search = ({search, setSearch}) => {
  return (
    <div><SearchResults search={search} setSearch={setSearch}/></div>
  )
}

export default Search;