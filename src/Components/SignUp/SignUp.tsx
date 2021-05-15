
import React, { useEffect, useState } from "react";
import { addUserApi } from "../../Redux/User/UserActions";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

export interface SignUpProps {
    
}


 
const SignUp: React.FunctionComponent<SignUpProps> = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const dispatch=useDispatch();
    const history=useHistory();

    const save=()=>{
        dispatch(addUserApi(
            {
                name:name,
                email:email
            }
        ))
        history.push('/signIn');

        
    }

    return ( <>
    <label>Please enter your name</label>
        <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name}></input>

        <label>Please enter your email</label>
        <input type="password" onChange={(e)=>{setemail(e.target.value)}} value={email}></input>
        <br />
        <button onClick={save}>Sign Up</button>
        <br />
        <button onClick={()=>{history.push('/signIn')}}>sign In</button>
    </> );
}
 
export default SignUp;


