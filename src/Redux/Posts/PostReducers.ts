// import { PostState } from '../../Models/UsersState';
import { Fetch_Posts, Fetch_Posts_Success, Fetch_Posts_Failure } from './PostTypes';

const initialState: any = {
    loading: false,
    Posts: [],
    error: ''
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Posts:
            return (
                {
                    ...state,
                    loading: true
                }
            )
        case Fetch_Posts_Success:
            return (
                {
                    ...state,
                    loading: false,
                    Posts: action.payload
                }
            )
        case Fetch_Posts_Failure:
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