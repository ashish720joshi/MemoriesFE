import React, { Component, useEffect, useState } from 'react'
import { loginUseApi } from '../../Redux/User/UserActions';
import {useDispatch,useSelector} from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { store } from '../../Redux/Store';
import {useHistory} from 'react-router-dom';


export interface SignInProps {
    
}
 
const SignIn: React.SFC<SignInProps> = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    
let history=useHistory();
    const login=()=>{
       dispatch( loginUseApi({
        name:name,
        email:email
    }));

  
    }

    useEffect(() => {
            if(user)
            history.push('/userStories');
        
    }, [user])

    console.log("user",user);
    console.log(store.getState());

    return (   <div>
        {   !user?.loading?

            <div>
        <label>Please enter your name</label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name}></input>
    
            <label>Please enter your email</label>
            <input type="password" onChange={(e)=>{setemail(e.target.value)}} value={email}></input>
            <br /><br />
            <button onClick={login}>Sign in</button>
            <br></br>
            <button onClick={()=>{history.push('/signUp')}}>sign up</button>
            </div>
            :
            <CircularProgress></CircularProgress>
            
        }
      </div> );
}
 
export default SignIn;