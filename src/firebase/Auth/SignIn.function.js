import {auth} from "../config"

const handleSignIn = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password)
        .then(alert("Welcome"))
        .catch(err=>{
            console.log(err)
        })
}

export {handleSignIn}