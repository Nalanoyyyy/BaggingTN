// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* โหลดฟอนต์ */
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600&display=swap');

  /* Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'IBM Plex Sans Thai', sans-serif;
    background-color: ${({ theme }) => theme?.background || '#f5f6fa'};
    color: ${({ theme }) => theme?.text || '#333'};
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  /* Scrollbar ซ่อนใน Chrome */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default GlobalStyle;