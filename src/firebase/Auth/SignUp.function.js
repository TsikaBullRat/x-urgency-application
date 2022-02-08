import { auth, firestore } from '../config'

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
}

const handleDoctorSignUp = (email, password, name, setMessage, qualification, specialization, branch, contactdetails) => {

    auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            user.user.updateProfile({
                displayName: name
            })
            .then(()=>{
                firestore.collection("Users").doc(auth.currentUser.uid).set({
                    username: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    doctor: true
                  })
                  .then(()=>{
                      firestore.collection("Users").doc(auth.currentUser.uid).collection("cred").doc(auth.currentUser.uid).set({
                          qualification, 
                          specialization, 
                          branch, 
                          contact,
                          subcribers: [],
                          about: ""
                      })
                  })
            })
            .catch(err => console.log(err))
        })
        .then(()=>{

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