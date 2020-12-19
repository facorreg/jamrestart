import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .search-bar {
    display: flex;
    width: 30vw;
    position: relative;
  }

  .search-bar-input {
     width: 100%;
     padding: 10px 15px;
  }

  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

const StyledSearchBar = () => (
  <SearchBarContainer id="search-bar-container">
    <div className="search-bar">
      <input className="search-bar-input" type="text" placeholder="search" />
      <button type="button" className="search-button">
        <Image src="/search.png" alt="magnifying glass" height={22} width={22} />
      </button>
    </div>
  </SearchBarContainer>
);

export default StyledSearchBar;
