import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    //font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .linkButton {
    text-decoration: none;
  }
  .mobile-hide {
    display: none;
    color: red;
    @media (min-width: 450px) {
      display: inherit;
    }
  }
  .mobile-only {
    @media (min-width: 450px) {
      display: none;
    }
  }
  
  .container {
    position: relative;
  }
  
  .page {
    position: absolute;
    width: 100%;
    background-color: #fafafa
  }
  
  .page-enter {
    opacity: 0;
   // transform: scale(1.1);
  }
  
  .page-enter-active {
    opacity: 1;
   // transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }
  
  .page-exit {
    opacity: 1;
    transform: scale(1);
  }
  
  .page-exit-active {
    opacity: 0;
   // transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export default GlobalStyle;
