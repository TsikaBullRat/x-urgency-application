export { handleSignIn } from './Auth/SignIn.function'
export { handleSignUp, handleDoctorSignUp } from './Auth/SignUp.function'
export { handleResetPassword } from './Auth/resetpassword';
export { app, auth, firestore, storage } from './config'
export { LoadSet, Upload } from './Storage/Storage.functions'
export {Detector} from './Auth/Protocol'
import Exit from "./Auth/LogOut"
export { Exit }
