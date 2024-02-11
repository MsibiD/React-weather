import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="body">
      <div className="search">
        <h1>
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </h1>
      </div>
    </div>
  );
}
