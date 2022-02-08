/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 06/10/2021 - 11:46:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import SignIn from "./AuthScreens/SignIn";
import SignUp from "./AuthScreens/SignUp"
import ForgotPassword from "./AuthScreens/ForgotPassword"
import Home from "./UserScreens/Home"
import VideoScreen from "./UserScreens/PlayVideo"
import UploadVideo from "./DoctorsScreens/UploadVideo"
import DoctorSignUp from "./AuthScreens/DoctorSignUp"
import DocSignUp from "./AuthScreens/DocSignUp"
import MedSignIn from "./AuthScreens/MedSignIn"
import MedicalHome from "./DoctorsScreens/MedicalHome"
import DoctorProfile from "./UserScreens/Doctor"
import Upload from "./DoctorsScreens/Upload"
import Clone from "./Clone"
import EmergencyContacts from "../Components/EmergencyContacts";
import { UpdateProfile } from "./DoctorsScreens/UpdateProfile"

export { SignIn, SignUp, ForgotPassword, Home, VideoScreen, UploadVideo, DoctorProfile, DoctorSignUp, DocSignUp, MedicalHome, Upload, Clone, EmergencyContacts, UpdateProfile }

export { UserScreens } from './UserScreens/UserScreens'
export { DoctorsScreens } from './DoctorsScreens/DoctorScreens'
export { AuthScreens } from './AuthScreens/AuthScreens'
