import React from "react";
import useDebounce from "../hooks/useDebounce.jsx";

const SearchBar = ({ search, setSearch, onSearch }) => {
  const debouncedSearch = useDebounce((term) => {
    onSearch(term);
  }, 300);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearch(term);
    debouncedSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;