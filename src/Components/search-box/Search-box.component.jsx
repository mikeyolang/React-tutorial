import React from "react";

import "./search-box.style.css";

// Fuctional Components-gets some props and return HTML and easier to text

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="seacrh-box">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />

   
  </div>
);
export default SearchBox;
