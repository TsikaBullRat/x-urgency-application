export { handleSignIn } from './Auth/SignIn.function'
export { handleSignUp, handleDoctorSignUp } from './Auth/SignUp.function'
export { handleResetPassword } from './Auth/resetpassword';
export { app, auth, firestore, storage } from './config'
export { LoadSet, UploadVideo } from './Storage/Storage.functions'
export {Detector, Like} from './Auth/Protocol'
import Exit from "./Auth/LogOut"
export { Exit }
export {Count, Collect } from './Firestore/Comments'
