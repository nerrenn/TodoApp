import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./Firebase";

export async function createAccount(email: string, password: string){

    const credential= await createUserWithEmailAndPassword(firebaseAuth, email, password) 

    return credential.user
}

export async function loggin(email:string, password: string){

    const credential = await signInWithEmailAndPassword(firebaseAuth, email, password)

    return credential.user
}