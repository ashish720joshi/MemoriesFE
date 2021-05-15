import axios from 'axios';
import { Users } from '../../Models/UsersState';
import { Fetch_Users, Fetch_Users_Success, Fetch_Users_Failure, Add_Users, Add_Users_Success, Add_Users_Failure, Login_Users, Login_Users_Success, Login_Users_Failure } from './UserTypes';


const fetchUsers = () => {
    return (
        {
            type: Fetch_Users
        }
    )
}

const fetchUsersFailure = (error) => {
    return (
        {
            type: Fetch_Users_Failure,
            payload: error
        }
    )
}


const fetchUsersSuccess = (users) => {
    return (
        {
            type: Fetch_Users_Success,
            payload: users
        }
    )
}

const addUsers=()=>{
    return({
        type:Add_Users
    })
}

const addUsersSuccess=()=>{
    return({
        type:Add_Users_Success,
    
    })
}

const addUsersFailure=(error)=>{
    return({
        type:Add_Users_Failure,
        payload:error
    })
}

const loginUsers=()=>{
    return({
        type:Login_Users
    })
}

const loginUsersSuccess=(res)=>{
    return({
        type:Login_Users_Success,
        payload:res
    })
}

const LoginUsersFailure=(error:any)=>{
    return({
        type:Login_Users_Failure,
        payload:error
    })
}

export const fetchUsersApi = () => {
    return (
        (dispatch) => {
            dispatch(fetchUsers())
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((users) => {
                    console.log('users are ', users.data);
                    dispatch(fetchUsersSuccess(users.data))
                })
                .catch((error) => {
                    console.log('error is ', error.message);
                    dispatch(fetchUsersFailure(error.message));
                })

        }
    )
}

export const addUserApi=(user:Users)=>{
    return(
        (dispatch)=>{
            dispatch(addUsers())
            axios.post('/addUsers', user).then(res=>{
                console.log("response", res);
                dispatch(addUsersSuccess())
            }).catch((error)=>{
                console.log(error.message);
                dispatch(addUsersFailure(error.message))
            })
        }
    )
}

export const loginUseApi=(user:any)=>{
    return(
        (dispatch)=>{
            dispatch(loginUsers());
            axios.post('/signIn', user).then(res=>{
                
                dispatch(loginUsersSuccess(res.data));
             

                
            }).catch((error)=>{
                dispatch(LoginUsersFailure(error.message))
            })
        }
    )
}