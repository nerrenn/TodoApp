import styled from "styled-components";
import { Theme } from "./App.style";

/**
 * Composant stylisé de l'accueil de l'application
 */
export const Page = styled.div`
    background-color: ${Theme.color.coldWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Titre = styled.h1`
    font-family: 'Lobster', sans-serif;
    font-weight: 300;
`

export const ContainerHome = styled.div`
    min-width: 100vw;
    min-height: 15vh;
    background-color: ${Theme.color.deepBlue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
`

export const ContainerList = styled.div`
    display: flex;
`

export const TextContainer = styled.p`
    font-size: 20px;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
`

export const List = styled.div`
    min-width: 11em;
    min-height: 3em;
    background-color: #5d9863;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Textlist = styled.p`
    color: white;
    font-size: 1.1em;
    font-family: 'Poppins', sans-serif;
`

export const UserContainer = styled.div`
    justify-self: flex-start;
    background-color: ${Theme.color.grey};
    min-height: 5vh;
    min-width: 30vw;
    display: flex;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0.4em;
    box-shadow: 0px 6px 4px -1px rgba(0,0,0,0.41);
`

export const IconUser = styled.i`
    //padding: 10px;
    font-size: 2em;
`
export const SmallText = styled.p`
    font-size: 12px;
    color: #BB8579;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin: 0;
`

export const TextUser = styled.p`
    font-size: 18px;
    color: #075252;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    margin: 0;
`

export const IdContainer = styled.div`
    padding: 0.2em 0 0 0.8em;
`