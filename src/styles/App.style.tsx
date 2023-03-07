import { createGlobalStyle } from "styled-components";

/**
 * Style Global de l'application
 */

    export const Theme = {
        color: {
            coldWhite: '#EDFFFB',
            softBlack: '#4F4F4F',
            greenocean: '#075252',
            green: '#557859',
            deepBlue:'#264F4A',
            white:'#EFEFEF',
            grey:'#d0cece'
        }
    }

export const AppGlobalStyle = createGlobalStyle`
    :root{
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color:${Theme.color.softBlack};
        background-color: ${Theme.color.coldWhite};
    }
    
    html, body, #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
        margin: 0;
        padding: 0;
    }

    *{
        box-sizing: border-box;
    }
`