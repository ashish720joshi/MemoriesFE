import { useEffect, useState } from "react";
import { addCommentApi, fetchCommentsApi } from "../../Redux/Posts/PostActions";
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { CircularProgress } from "@material-ui/core";
export interface CommentsProps {
    
}
 
const Comments: React.SFC<CommentsProps> = () => {
    const history=useHistory();
    const dispatch = useDispatch();
    const [activityId, setactivityId] = useState(history.location.pathname.split('/')[2])
    const [postId, setpostId] = useState(history.location.pathname.split('/')[3])
    const comments = useSelector(state => state.posts.comments)
    const user = useSelector(state => state.users.user)
   
    const [comment, setcomment] = useState("");
    
    useEffect(() => {
        console.log(activityId);
       dispatch(fetchCommentsApi(postId));
        
    }, [])

    const addComment=()=>{
        dispatch(addCommentApi(activityId,comment,user.userId,postId))
    }

    return ( <div>
        <input type="text" value={comment} onChange={(e)=>{setcomment(e.target.value)}}></input>
        <button onClick={addComment}>addComment</button>
        <br></br><br></br><br></br><br></br><br></br>
        {
        comments?comments.map(comment=>(
            <input type="text" value={comment.comment} disabled></input>
        ))
        :
        <div>No Comments</div>
        
        }
    </div> );
}
 
export default Comments;


