'use client'

import { createGlobalStyle, css } from 'styled-components'


const styles = css`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }

    html, body{
        font-family: 'Poppins', sans-serif;
        width: 98.5vw;
        overflow-x: hidden;
        scroll-behavior: smooth;
        
        
        @media all and (orientation: portrait) {
            width: 100vw;
        }

    }

`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;