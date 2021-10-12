import { auth } from '../config'

const handleSignUp = (email, password, Confirmpassword, setEmail, setPassword, setConfirmPassword, setMessage) => {
    if (password !== Confirmpassword) {
        alert("Password Doesn't Match")
        setPassword(" ")
        setConfirmPassword(" ")
    }
    else {
        auth.createUserWithEmailAndPassword(email, password).then(
            //    alert('Signed Up')
        )
            .catch((error) => {
                // switch(error.code){
                //     case ""
                // }
                setMessage(error.message);
            });
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
}
export { handleSignUp }