import { firestore } from '..';
import { auth } from '../config'
const handleSignUp = (email, password, Confirmpassword, setMessage) => {
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

const handleDoctorSignUp = (email, password, name, setMessage) => {

        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                user.user.displayName = name
                setMessage("Welcome")
                console.log('this is done')
            })
            .catch((error) => {
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
export { handleSignUp, handleDoctorSignUp }