import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100dvh;
        overflow: hidden;
        background: #493d5b;
        color: #fff;
        font-family: "Pixelify Sans", serif;
    }

    input, button {
        font-family: "Pixelify Sans", serif;
    }
    
`

export default GlobalStyle;