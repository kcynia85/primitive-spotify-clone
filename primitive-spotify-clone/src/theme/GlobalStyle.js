import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;