import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: #493d5b;
        color: #fff;
        font-family: 'Pixelify Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

export default GlobalStyle;