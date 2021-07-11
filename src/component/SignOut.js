import React from 'react';
import {Auth} from "aws-amplify";

function SignOut(props) {
    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut();
        window.location.reload() 
      }
    return (
      <button onClick={signOut} className="btn btn-lg btn-outline-primary rounded-pill">
        Sign out
      </button>
    );
}

export default SignOut;

