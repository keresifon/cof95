import React from 'react';
import {Auth} from "aws-amplify";
import { useHistory } from 'react-router-dom';


function SignOut(props) {
    const history = useHistory();

    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut();
        history.push("/");
        window.location.reload();
      
    }
    return (
      <button onClick={signOut} className="btn btn-lg btn-outline-primary rounded-pill">
        Sign out
      </button>
    );
}

export default SignOut;

