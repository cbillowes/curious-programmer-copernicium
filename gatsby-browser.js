/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css';
import './src/styles/print.scss';
import React from 'react';
import { ThemeProvider } from './src/context/Theme';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
