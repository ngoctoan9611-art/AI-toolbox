import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged,
  signOut,
  User
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-applet-config.json";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');

export const initAuth = (onSuccess: (user: User) => void, onFail: () => void) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      onSuccess(user);
    } else {
      onFail();
    }
  });
};

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    return { user: result.user, accessToken };
  } catch (error) {
    console.error("Auth Error:", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
