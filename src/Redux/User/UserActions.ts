import axios from 'axios';
import { Fetch_Users, Fetch_Users_Success, Fetch_Users_Failure } from './UserTypes';

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