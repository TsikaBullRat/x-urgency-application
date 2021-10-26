import { auth } from '../config'
const handleSignUp = (email, password, Confirmpassword, setEmail, setPassword, setConfirmPassword, setMessage) => {
    if (password !== Confirmpassword) {
        setMessage("Password Doesn't Match")
    }
    else {
        auth.createUserWithEmailAndPassword(email, password)
            .then(
                setMessage("Welcome")
            )
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'auth/invalid-email':
                        setMessage("Invalid email address")
                        break
                    case 'auth/weak-password':
                        setMessage("Password too weak")
                        break
                }
            });
    }
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")
}
export { handleSignUp }

// switch (err.code) {
//     case "auth/wrong-password":
//         setMessage("Your password is incorrect")
//         break;
//     case "auth/user-not-found":
//         setMessage("User not found")
//         break;
//     case 'auth/invalid-email':
//         setMessage("Invalid email address")
//         break
// }