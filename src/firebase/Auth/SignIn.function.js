import {auth} from "../config"
import { alertNote } from "../../Components"

const handleSignIn = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            alertNote()
            alert("Login Successful")
        })
        .catch(err=>{
            console.log(err)
        })
}

export {handleSignIn}