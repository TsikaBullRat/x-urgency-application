import { auth } from '../config'
const handleSignUp = (email, password, ConfirmPassword, setEmail, setPassword, setConfirmPassword, setMessage) => {
    if (password !== ConfirmPassword) {
        alert("Password Doesn't Match")
        setPassword(" ")
        setConfirmPassword(" ")
    }
    else {
        auth.createUserWithEmailAndPassword(email, password)
            .then(

            )
            .catch((error) => {
                console.log(error);
            });
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
}
export { handleSignUp }