import { createGlobalStyle } from "styled-components";

/**
 * Style Global de l'application
 */

    export const AppTheme = {
        color: {
            white: '#FFF'
        }
    }

export const AppGlobalStyle = createGlobalStyle`
    :root{
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
    }
    
    html, body, #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
        margin: 0;
        padding: 0;
    }

    *{
        box-sizing: border-box;
    }
`