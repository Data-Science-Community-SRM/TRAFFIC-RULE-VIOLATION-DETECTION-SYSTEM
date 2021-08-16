import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import Toggle from './Theme/toggle' ;
import Home from './Home/home';
import About from './About/about';
import Navbar from './Navbar/navbar';
import Sub from './Sub/sub';
import Team from './Team/team';
import "./App.css";
function App() {
  
  const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
 
  } else {
    setTheme('light');
  }
}
  return (
    <>
 <Navbar />
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />

    </ThemeProvider>
    <Home />
    <About />
    <Sub />
    <Team />
    </>
  );
}




export default App;
