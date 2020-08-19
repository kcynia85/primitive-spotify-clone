import React from 'react';
import Login from 'components/Login/Login';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';

const Root = () => { 
  return (  
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div className="app"> 
          <Login />
        </div>
    </ThemeProvider> 
)};

  
export default Root;
