import { createGlobalStyle } from 'styled-components';

const Shared = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  body {
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    margin: 0;

    #app {
      max-width: 100vw;
      display: grid;
      grid-template-areas:
        "header"
        "content";

    }
  }
`;

export default Shared;