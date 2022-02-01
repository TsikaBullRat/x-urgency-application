import { auth } from "..";

const Exit = () => {
    auth.signOut()
        .then(function () {
            console.log("Signed out")
            // Sign-out successful.
        }).catch(function (error) {
            console.log(error)
            // An error happened.
        });
}

export default Exit;