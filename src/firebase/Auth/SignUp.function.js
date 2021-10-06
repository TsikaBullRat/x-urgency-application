import { auth } from '../config'

const handleSignUp = (email, password, Confirmpassword, setEmail, setPassword, setConfirmPassword) => {
    if (password !== Confirmpassword) {
        alert("Password Doesn't Match")
        setPassword(" ")
        setConfirmPassword(" ")
    }
    else {
        auth.createUserWithEmailAndPassword(email, password).then(
           alert('Signed Up')
        )
            .catch((error) => {
                alert('Unsuccesful')
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
}
export {handleSignUp}