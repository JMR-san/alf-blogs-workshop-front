import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import "../styles/Searchbar.css";

const Searchbar = ({ searchText, onSearchChange }) => {
  const handleOnChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-icon-container">
        <IoSearchOutline size={28} color="#b6b6b6" />
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search Article"
        value={searchText}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Searchbar;