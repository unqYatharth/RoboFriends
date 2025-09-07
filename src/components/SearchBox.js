import React from "react";

const SearchBox = ({searchField, setSearchField }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
    </div>
  )
}

export default SearchBox;