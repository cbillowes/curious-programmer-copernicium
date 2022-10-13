import React, { useState, useEffect, useMemo, createContext } from 'react';
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
  const setColorMode = (newValue) => {
    rawSetColorMode(newValue);
    localStorage.setItem('color-mode', newValue);
    root.style.setProperty('--initial-color-mode', newValue);
    root.classList = newValue;
  };

  const [colorMode, rawSetColorMode] = useState('light');
  const root = useMemo(
    () =>
      typeof window !== 'undefined' ? window.document.documentElement : {},
    [],
  );

  useEffect(() => {
    const color = getInitialColorValue(root);
    rawSetColorMode(color);
    localStorage.setItem('color-mode', color);
    root.style.setProperty('--initial-color-mode', color);
    root.classList = color;
  }, [root]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
