import React from "react";
import "./SearchBar.css";
//import './App.css';

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="logos">
        <i className="fab fa-instagram" />
        <img
          className="instagram-word-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="Instagram word logo"
        />
      </div>

      <form className="search-bar-form">
        <input 
        className="search-bar-input"
        onChange={props.filterPostHandler} placeholder="Search..." />
      </form>

      <div className="search-bar-icons">
        <i className="far fa-compass"> </i>
        <i className="far fa-heart"> </i>
        <i className="far fa-user"> </i>
      </div>
    </div>
  );
};

export default SearchBar;
