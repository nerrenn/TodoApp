import { useStore } from "@nanostores/react"
import { Link, Navigate } from "react-router-dom"
import { changeEmail, changePassword, connexion, subscribe, UserStore} from "../stores/UserStore"
import { Container, InputContainer, LogoNotValid, LogoValid, SubButton, TextInput, TitleSub } from "../styles/Subscription.style"

/**
 * Composant de l'écran de connexion
 */
export default function Subscription() {
    const {email, password, isPasswordValid, isEmailValid, isSending, error, user} = useStore(UserStore)

    if (user) {
        return <Navigate to="/"></Navigate>
      }

    return(
        <Container>
            <TitleSub>Connexion</TitleSub>
            <InputContainer>
                <TextInput type="email" value={email} onChange={changeEmail}></TextInput>
                {isEmailValid === null ? null : isEmailValid ? (
                    <LogoValid className="fa-regular fa-circle-check"></LogoValid>
                ) : (
                    <LogoNotValid className="fa-regular fa-circle-xmark"></LogoNotValid>
                )}
            </InputContainer>
            <InputContainer>
                <TextInput type="password" value={password} onChange={changePassword}></TextInput>
                {isPasswordValid === null ? null : isPasswordValid ? (
                    <LogoValid className="fa-regular fa-circle-check"></LogoValid>
                ) : (
                    <LogoNotValid className="fa-regular fa-circle-xmark"></LogoNotValid>
                )}
            </InputContainer>
            {error ? <p>{error}</p> : null}
            {isSending ? ( <p>Chargement</p> ) : 
            (
                <>
                <SubButton onClick={connexion}>Envoyer</SubButton> 
                </>
            )}
            <Link to="/Subscription">Vous n'avez pas de compte<br/> Inscrivez-vous</Link>
        </Container>
    )
}