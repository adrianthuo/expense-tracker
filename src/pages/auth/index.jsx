import { Form } from "react-router-dom";

import {auth , provider } from "../../config/firebase-config";
import {signInWithPopup} from 'firebase/auth';
import styled from "styled-components";

import {useNavigate} from "react-router-dom"

 export const Auth = ( )=> {
const navigate = useNavigate();
   const signInWithGoogle = async () => {

            const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true ,
        }
            localStorage.setItem("auth",JSON.stringify(authInfo));
            navigate("/expense-tracker");
   };
    return (
    <Wrap>
        <div className="login-page">
        
       
            <p> Sign in with google to continue</p>
           <Button onClick={signInWithGoogle}>  
                {""}
                Sign in With Google
           
            </Button>
        </div>
    </Wrap>
        
        );
};


const Wrap = styled.div`

  border: 1px solid red ;
  height: 80vh ;
  align-items : center ;
  font-size: x-large;
  margin-left: 25%;
  margin-top: 5%;
  width: 50%;
    border-radius: 60px;
    background-color: rgb(148 163 184);

  p{

    align-text: center ;
    color: red ;
    margin-top: 10%;
  }

`
const Button = styled.button`

  border:none;
  border-radius: 10px;
  margin-top: 15%;
  
`