import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const getInitialColorValue = (root) => {
  const storedValue = localStorage.getItem('color-mode');
  const initialValue = root.style.getPropertyValue('--initial-color-mode');
  return storedValue || initialValue || 'light';
};

export const toggleColorMode = (colorMode) => {
  return colorMode === 'dark' ? 'light' : 'dark';
};

export const ThemeContext = createContext({
  colorMode: '',
  setColorMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  if (typeof document === 'undefined') return;

  const root = window.document.documentElement;
  const initialColorValue = getInitialColorValue(root);
  root.style.setProperty('--initial-color-mode', initialColorValue);
  root.classList = initialColorValue;

  const [colorMode, rawSetColorMode] = useState(initialColorValue);

  useEffect(() => {
    const initialColorValue = getInitialColorValue(root);
    rawSetColorMode(initialColorValue);
    localStorage.setItem('color-mode', initialColorValue);
  });

  const setColorMode = (newValue) => {
    rawSetColorMode(newValue);
    localStorage.setItem('color-mode', newValue);
    root.style.setProperty('--initial-color-mode', newValue);
    root.classList = newValue;
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
