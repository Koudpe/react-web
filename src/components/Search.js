import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className='container'>
      <form className='search'>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
