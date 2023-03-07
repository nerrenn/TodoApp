import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth"
import { action, map } from "nanostores"
import { ChangeEvent } from "react"
import { firebaseAuth } from "../lib/Firebase"

/**
 * @module Subscribe.store
 *
 * @description
 *  This file contains states and actions of the subscribe
 *  screen.
 */


/**
 * This is what contains the state of the subscribe
 * screen
 */

export type User = {
    uid:string
    email:string | null

}

export type userStore= {
    email:string
    password: string
    isEmailValid: boolean | null
    isPasswordValid: boolean | null
    isSending: boolean
    user?: User
    error?: string
}

/**
 * Store containing the subscribe state
 */
export const UserStore = map<userStore>({
    email: '',
    password: '',
    isPasswordValid: null,
    isEmailValid: null,
    isSending: false,
  })

  /**
 * Action allowing to change the store email
 */
export const changeEmail = action(
    // Store on wich we want to execute the action
    UserStore,
    // Name if the action used for debugging
    'change email',
    // Function of the action ! This one is the code
    // thta actually change the email in the store
    (store, e: ChangeEvent<HTMLInputElement>) => {
      // We can change a box content
      store.setKey('email', e.currentTarget.value)
      // On lance la validation de l'email
      validateEmail()
    },
  )
  
  /**
   * Action allowing to change the password
   */
  export const changePassword = action(
    UserStore,
    'change password',
    (store, e: ChangeEvent<HTMLInputElement>) => {
      // We can change a box content
      store.setKey('password', e.currentTarget.value)
      // We validate the password
      validatePassword()
    },
  )
  
  /**
   * Action that validates the email of the store
   */
  export const validateEmail = action(UserStore, 'validate email', store => {
    // Retrieve the email in the store
    const { email } = store.get()
  
    if (email === '') {
      store.setKey('isEmailValid', null)
  
      return
    }
  
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      store.setKey('isEmailValid', true)
  
      return
    }
  
    store.setKey('isEmailValid', false)
  })
  
  /**
   * Action permettant de valider le mot de passe
   */
  export const validatePassword = action(
    UserStore,
    'validate password',
    store => {
      // Retrieve the password in the store
      const { password } = store.get()
  
      if (password === '') {
        store.setKey('isPasswordValid', null)
  
        return
      }
  
      if (password.length < 6) {
        store.setKey('isPasswordValid', false)
  
        return
      }
  
      store.setKey('isPasswordValid', true)
    },
  )

  
  export const subscribe = action(UserStore, 'subscribe', async store => {
    const { email, password, isEmailValid, isPasswordValid, isSending} = store.get()

    if(!isEmailValid || !isPasswordValid || isSending){
      return
    }

    store.setKey('isSending', true)

    try{
      const result = await createUserWithEmailAndPassword(firebaseAuth, email, password)

      store.setKey('isSending', false)
      store.setKey('user', result.user)
    }
    catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        store.setKey('error', 'Email dèjà enregistré')
      } else {
        store.setKey('error', 'Une erreur est survenue :/. Réessayer plus tard')
      }

    store.setKey('isSending', false)
  }

})

export const connexion = action(UserStore, 'connexion', async (store) => {
  const { email, password, isEmailValid, isPasswordValid, isSending} = store.get()

  if(!isEmailValid || !isPasswordValid || isSending){
    return
  }

  store.setKey('isSending', true)

  try{
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password)

    store.setKey('isSending', false)
    store.setKey('user', result.user)
  }
  catch (e: any) {
    if (e.code === 'auth/user-not-found') {
      store.setKey('error', 'Addresse email introuvable !')
    } else if(e.code === 'auth/wrong-password'){
      store.setKey('error', 'Mot de passe invalide !')
    }else {
      store.setKey('error', 'Une erreur est survenue :/. Réessayer plus tard')
    }

  store.setKey('isSending', false)
}

})