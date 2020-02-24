import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1> It's a {theme === 'light' ? 'light theme' : 'dark theme'}</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
