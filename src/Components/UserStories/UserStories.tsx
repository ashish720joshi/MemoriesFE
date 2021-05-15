import { useEffect, useState } from 'react';
import style from './UserStories.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAPostApi, fetchPostsApi, likeAPostApi, unlikeAPostApi } from '../../Redux/Posts/PostActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useHistory} from 'react-router-dom';
function UerStories()
{
  //  const [isReady, setisReady] = useState(false);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)
    const user = useSelector(state => state.users.user)
    let history=useHistory();
    
   console.log(posts.loading);
   
    useEffect(() => {
        try{
            console.log("1");
         dispatch(fetchPostsApi());
        // setisReady(true)
      //  console.log("use effect, setIsReady", isReady)
        }
        catch(e)
        {
            console.log(e);
          //  setisReady(true);
            
        }
    },[]);

    const like=(acitivityId,likes)=>{
     // user.userId=1006;
      dispatch(likeAPostApi(user.userId,acitivityId,likes))
    }

    const unlike=(acitivityId,likes)=>{
      dispatch(unlikeAPostApi(user.userId,acitivityId,likes))
    }

    const comment=(activityId,postId)=>{
      history.push(`comments/${activityId}/${postId}`)
    }

    const deleteAPost=(postId,activityId)=>{
      dispatch(deleteAPostApi(postId,activityId));
    }
    
    
    return (<div style={{display:'flex',flexWrap:'wrap'}} >
        {
            !posts.loading?
            posts.Posts.map((post,index)=>
                post.postPath?( <div key={index} className={style.UserStories}>
                    <img style={{height:'90%', width:'90%'}} src={post.postPath} />
                    <div className={style.Options}>
                      <ThumbUpAltIcon onClick={()=>{like(post.activityId,post.likes)}}></ThumbUpAltIcon>
                      <ThumbDownIcon onClick={()=>{unlike(post.activityId,post.likes)}}></ThumbDownIcon>
                      <span>{post.likes}</span>
                      <ChatBubbleOutlineIcon onClick={()=>{comment(post.activityId,post.postId)}}></ChatBubbleOutlineIcon>
                      <DeleteIcon onClick={()=>{deleteAPost(post.postId,post.activityId)}}></DeleteIcon>
                    </div>
                    </div>):null)      
                    :<CircularProgress />  }
    </div>)
}

export default UerStories;