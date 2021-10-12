import { auth } from "../config"
// import { alertNote } from "../../Components"

<<<<<<< HEAD
const handleSignIn = (email, password, setMessage, setDone) =>{
    auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            setDone(true)
        })
        .catch(err=>{
            setDone(false)
            switch(err.code){
=======
const handleSignIn = (email, password, setMessage) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // alertNote()
            // alert("Login Successful")
        })
        .catch(err => {
            switch (err.code) {
>>>>>>> 81d80e685c5ef885c3d2f9613cea4c66386f382d
                case "auth/wrong-password":
                    setMessage("Your password is incorrect")
                    break;
                case "auth/user-not-found":
                    setMessage("User not found")
                    break;
                case 'auth/invalid-email':
                    setMessage("Invalid email address")
                    break
            }
        })
}

export { handleSignIn }