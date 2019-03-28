import React from "react";
import "./SearchBar.css";
import styled, { css } from "styled-components";

//import './App.css';

const SearchDiv = styled.div`
  height: 80px;
  margin-top: 20px;
  padding: 0 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  align-items: center;
`;

const LogosDiv = styled.div`
  display: flex;
  align-items: center;
`;

const InstagramImage = styled.img`
  width: 100px;
  padding-left: 10px;
`;

const SearchBarForm = styled.form``;

const SearchInput = styled.input`
  width: 200px;
  border: 1px solid lightgray;    
  border-radius: 5px;
  padding: 12px;
  text-align: center;
  font-size: 0.8rem;
`;

const SearchIconsDiv = styled.div`
  display: flex;
  color: black; 
  font-size: 1.3rem;
`;

const SearchBar = props => {
  return (
    <SearchDiv>
      <LogosDiv>
        <i className="fab fa-instagram" />
        <InstagramImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="Instagram word logo"
        />
      </LogosDiv>

      <SearchBarForm>
        <SearchInput 
        className="search-bar-input"
        onChange={props.filterPostHandler} //don't use onKeyDown
        placeholder="Search..." />
      </SearchBarForm>

      <SearchIconsDiv className="search-bar-icons">
        <i className="far fa-compass"> </i>
        <i className="far fa-heart"> </i>
        <i className="far fa-user"> </i>
      </SearchIconsDiv>
    </SearchDiv>
  );
};

export default SearchBar;
