import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

   body::-webkit-scrollbar {
       display: none;
   } 

   html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Varela Round', sans-serif;
        font-size: 14px;
        margin: 0;
    }
`;

export default GlobalStyle;