import { rmSync } from "fs";
import styled from "styled-components";
import { Theme } from "./App.style";

/**
 * Composant stylisé l'écran d'inscription
 */
export const TitleSub = styled.h1`
    font-family: 'Lobster', sans-serif;
    font-size: 3em;
    font-weight: 300;
    margin-bottom: 2em;
    margin-top: 1.5em;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.div`
    display: flex;
    padding: 0.6em;
    border-bottom: solid 1px black;
    margin: 1em 0;
    min-width: 15em;
`

export const TextInput = styled.input`
    outline:none;
    border:none;
    background-color: ${Theme.color.coldWhite};
    font-family: 'Poppins', sans-serif;
`

export const SubButton = styled.button`
    outline:none;
    border:none;
    background-color: ${Theme.color.green};
    border-radius: 0.5em;
    box-shadow: 0px 0px 5px black;
    font-size: 1em;
    color: ${Theme.color.white};
    min-width: 11em;
    min-height: 3em;
    margin: 2em 0;
`

export const LogoNotValid = styled.i`
    font-size: 1.8em;
    color: red;
    padding-left: 2em;
`

export const LogoValid = styled.i`
    font-size: 1.8em;
    color: green;
    padding-left: 2em;
`