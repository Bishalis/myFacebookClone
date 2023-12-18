import { initializeApp } from "firebase/app";
import { getAuth ,connectAuthEmulator} from "firebase/auth";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSEGESENDERID,
  // appId:process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID,
  apiKey: "AIzaSyC0V55ClNF9mnHvdtZCK1ECsIIFArNDgVE",
  authDomain: "facebook-clone-e9ec0.firebaseapp.com",
  databaseURL: "https://facebook-clone-e9ec0-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-e9ec0",
  storageBucket: "facebook-clone-e9ec0.appspot.com",
  messagingSenderId: "958981832214",
  appId: "1:958981832214:web:218c18598d6fa1381fff37",
  measurementId: "G-GBNGRHEFG3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

