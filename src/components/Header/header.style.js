import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas: 
    "logo hc sb usrintr";

  grid-template-columns: 80px calc(30vw - 80px) repeat(2, auto);
  
  > div {
    line-height: 110px;
  }

  .logo {
    grid-area: logo;
    height: 100%;
    max-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-categories,
  .usr-interactions {
    display: flex;
    flex-direction: rows;

    > div, a {
      font-size: 0.8em;
      margin: 0 15px;
      letter-spacing: 2px;
      color: gray;
      cursor: pointer;
    }

    > div:hover,
    a:hover,
    .currentCat { 
      color: black;
    }

    a {
      text-decoration: none;
    }
  }
  
  .header-categories {
    grid-area: hc;
  }

  .usr-interactions {
    display: flex;
    justify-content: flex-end;
    grid-area: usrintr;
  }

  #search-bar-container {
    grid-area: sb;
  }
`;

export default HeaderStyle;
