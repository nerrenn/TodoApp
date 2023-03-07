import { useStore } from "@nanostores/react"
import { changeEmail, changePassword, SubscribeButton, SubscribeStore } from "../stores/Subscription.store"

/**
 * Composant de l'écran de connexion
 */
export default function Subscription() {

    const {email, password, isPasswordValid, isEmailValid, isEmailAlreadyExist} = useStore(SubscribeStore)
    return(
        <>
            <h1>Inscription</h1>
            {isEmailAlreadyExist === false ? false : ( <p> ! Email déjà enregistré ! </p> )}
            <div>
                <input type="email" value={email} onChange={changeEmail}></input>
                {isEmailValid === null ? null : isEmailValid ? (
                    <p>Valide</p>
                ) : (
                    <p>Non Valide</p>
                )}
            </div>
            <div>
                <input type="password" value={password} onChange={changePassword}></input>
                {isPasswordValid === null ? null : isPasswordValid ? (
                    <p>Valide</p>
                ) : (
                    <p>Non Valide</p>
                )}
            </div>
            <button onClick={SubscribeButton}>S'inscrire</button>
            <p>Vous avez déjà un compte ?<br/> Connectez-vous</p>
        </>
    )
}