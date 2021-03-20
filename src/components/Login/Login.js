import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="login-button">
            <h1>This is Login</h1>
            <input type="text" name="name" placeholder="Enter Your name" required /> 
        <br />
        <input type="email" name="email" placeholder="Enter Your Email" required />
        <br/>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;


// import React, { useReducer, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase.config";
// import './Login.css';

// firebase.initializeApp(firebaseConfig);

// function Login () {
//   const [newUser, setNewUser] = useState(false);
//   const [user, setUser] = useState({
//     isSigned: false,
//     name: "",
//     email: "",
//     password: "",
//     photo: "",
//     error: "",
//     success: false,
//   });
//   const provider = new firebase.auth.GoogleAuthProvider();

//   const handleSignIn = () => {
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         const { displayName, email, photoURL } = result.user;
//         const signedInUser = {
//           isSigned: true,
//           name: displayName,
//           email: email,
//           photo: photoURL,
//         };
//         setUser(signedInUser);
//       })
//       .catch((error) => {
//         console.log(error);
//         console.log(error.message);
//       });
//   };

//   const handleSignOut = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then((res) => {
//         const signOutUser = {
//           isSigned: false,
//           name: "",
//           email: "",
//           photo: "",
//         };
//         setUser(signOutUser);
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   const handleBlur = (e) => {
//     let isFieldValid = true;
//     if (e.target.name === "email") {
//       isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
//     }
//     if (e.target.name === "password") {
//       const passwordLength = e.target.value.length > 6;
//       const passwordValidate = /\d{1}/.test(e.target.value);
//       isFieldValid = passwordLength && passwordValidate;
//     }
//     if (isFieldValid) {
//       const newUserInfo = { ...user };
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo);
//     }
//   };
//   const handleSubmit = (e) => {
//     if (user.email && user.password) {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(user.email, user.password)
//         .then((res) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = "";
//           newUserInfo.success = true;
//           setUser(newUserInfo);
//         })
//         .catch((error) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = error.message;
//           setUser(newUserInfo);
//         });
//     }

//     if (!newUser && user.email && user.password) {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(user.email, user.password)
//         .then((res) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = "";
//           newUserInfo.success = true;
//           setUser(newUserInfo);
//         })
//         .catch((error) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = error.message;
//           setUser(newUserInfo);
//         });
//     }
//     e.preventDefault();
//   };
//   return (
//     <div className="login-button">
//       {user.isSigned ? (
//         <button onClick={handleSignOut}>Sign Out</button>
//       ) : (
//         <button onClick={handleSignIn}>Sign In</button>
//       )}
//       {user.isSigned && <h1>{user.name}</h1>}
//       <img src={user.photo} alt=""/>

//       <h1>Our Own Authentication</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="checkbox"
//           onChange={() => setNewUser(!newUser)}
//           name="newUser"
//           id=""
//         />
//         <label htmlFor="newUser">New User Sign Up</label>
//         <br />
//         {newUser && (
//           <input type="text" name="name" onBlur={handleBlur} placeholder="Enter Your name" required /> )}
//         <br />
//         <input type="email" name="email" onBlur={handleBlur} placeholder="Enter Your Email" required />
//         <br />
//         <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Password" required />
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//       <h1 style={{ color: "red" }}>{user.error}</h1>
//       {user.success && (
//         <h1 style={{ color: "green" }}>
//           Account {newUser ? "Created" : "Logged In "} Successfully </h1> )}
//     </div>
//   );
// }

// export default Login;