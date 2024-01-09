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

display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;



  p{

    align-text: center ;
    color: blue ;
    font-weight: 600 ;
    margin-top: 10%;
    font-size: 20px;
  }

`
const Button = styled.button`

  border:none;
  border-radius: 10px;
  margin-top: 15%;
  background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 20px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	cursor: pointer;
  
  &:hover{
    background-color: #FF7F7F ;
  }
	
  
`
