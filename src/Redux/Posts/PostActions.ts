import axios from 'axios';
import { 
    Fetch_Posts, 
    Fetch_Posts_Success, 
    Fetch_Posts_Failure,
    Add_Post,
    Add_Post_Success,
    Add_Post_Failure,
    Fetch_Comments
} from './PostTypes';

import {Post} from '../../Models/PostsState';

const baseUrl='localhost:5000/';

const fetchPosts = () => {
      console.log("3");
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
      console.log("7");
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
              console.log("2");
            dispatch(fetchPosts())
            axios.get('/getPosts')
                .then((Posts) => {
                      console.log("6");
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


export const addPost=(post:any)=>{

    return (
        {
            type: Add_Post,
            payload: post
        }
    )
}

export const addPostSuccess=()=>{
    return (
        {
            type: Add_Post_Success,
           
        }
    )
}

export const addPostFailure=(error)=>{
    return (
        {
            type: Add_Post_Failure,
            payload: error
        }
    )
}

export const getLikes=()=>{
    return({

    })
}

export const fetchComments=(comments)=>{
    return({
        type:Fetch_Comments,
        payload:comments
    })
}


export const addPostApi=(Post:Post)=>{
    console.log(Post);
    debugger;
    let formdata=new FormData();
    formdata.append("postData",JSON.stringify(Post));
    formdata.append("postImage",Post.post);
    return(async (dispatch)=>{
        dispatch(addPost(formdata));
        try{
            const response=await axios.post(`/addPosts`,formdata) ;
            dispatch(addPostSuccess());
            dispatch(fetchPostsApi());
        }
        catch(e)
        {
            dispatch(addPostFailure(e));
        }
    })
}

export const deleteAPostApi=(postId,activityId)=>{
    return(async (dispatch)=>{
        try{
            const response=await axios.delete(`/deleteAPost/${postId}/${activityId}`);
            dispatch(fetchPostsApi());
        }catch(e)
        {
            console.log(e);
        }
    })
}

// export const getLikesApi=()=>{
//     return((dispatch)=>{
//         try{
//             const likes=await axios.get(`/getLikes/${}`)
//         }
//         catch(e)
//         {
//             console.log(e);
//         }
//     })
// }

export const likeAPostApi=(userId,activityId,likes)=>{
    return(async (dispatch)=>{
        try{
                const response=await axios.put(`/like/${userId}/${activityId}/${likes}`);
                dispatch(fetchPostsApi());

        }
        catch(e)
        {
            console.log(e);
        }
    })
}

export const unlikeAPostApi=(userId,activityId,likes)=>{
    return(async (dispatch)=>{
        try{
                const response=await axios.put(`/unlike/${userId}/${activityId}/${likes}`);
                dispatch(fetchPostsApi());

        }
        catch(e)
        {
            console.log(e);
        }
    })
}



export const fetchCommentsApi=(postId)=>{

        return(async (dispatch)=>{
            try{
                const response= await axios.get(`/getComments/${postId}`);
                console.log(response.data)
                dispatch(fetchComments(response.data.recordset))

            }catch(e)
            {
                console.log(e);
            }
        })
}

export const addCommentApi=(activityId,comment,userId,postId)=>{
    return(async (dispatch)=>{
        try{
            const requestBody={userId:userId,comment:comment,postId:postId}
            const response=await axios.post(`/addComment`,requestBody)
            dispatch(fetchCommentsApi(postId));
        }
        catch(e)
        {
            console.log(e);
        }
    })
}