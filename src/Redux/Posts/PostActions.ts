import axios from 'axios';
import { Fetch_Posts, Fetch_Posts_Success, Fetch_Posts_Failure } from './PostTypes';

const fetchPosts = () => {
    return (
        {
            type: Fetch_Posts
        }
    )
}

const fetchPostsFailure = (error) => {
    return (
        {
            type: Fetch_Posts_Failure,
            payload: error
        }
    )
}


const fetchPostsSuccess = (Posts) => {
    return (
        {
            type: Fetch_Posts_Success,
            payload: Posts
        }
    )
}

export const fetchPostsApi = () => {
    return (
        (dispatch) => {
            dispatch(fetchPosts())
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((Posts) => {
                    console.log('Posts are ', Posts.data);
                    dispatch(fetchPostsSuccess(Posts.data))
                })
                .catch((error) => {
                    console.log('error is ', error.message);
                    dispatch(fetchPostsFailure(error.message));
                })

        }
    )
}