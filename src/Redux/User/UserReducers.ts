import { UserState } from '../../Models/UsersState';
import { Fetch_Users, Fetch_Users_Success, Fetch_Users_Failure } from './UserTypes';

const initialState: UserState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Users:
            return (
                {
                    ...state,
                    loading: true
                }
            )
        case Fetch_Users_Success:
            return (
                {
                    ...state,
                    loading: false,
                    users: action.payload
                }
            )
        case Fetch_Users_Failure:
            return (
                {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            )
        default:
            return state;
    }
}