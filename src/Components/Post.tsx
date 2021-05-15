import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {addPostApi} from '../Redux/Posts/PostActions';
import {fetchPostsApi} from '../Redux/Posts/PostActions';
import { store } from "../Redux/Store";

export interface PostProps {
    
}




let posts:any;
 
const Post: React.SFC<PostProps> = () => {
    const [file, setfile] = useState('');
    const [name, setname] = useState('');
    const [isReady,setisReady]=useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    
    
    console.log(state);

    const handleChange=(event)=>{
        console.log(event.target.files);
        setfile(event.target.files[0]);
        
    }

    const handleChange2=(event)=>{
        setname(event.target.value);
    }

    useEffect(() => {
     console.log("in")
    
     
      setisReady(true);
    },[]);


    const save=()=>{
        setisReady(false);
        dispatch(addPostApi(
            {
                userId: 1,
               
                postName: name,
                post: file,
                type_:'post'
            }
        ));
        
        
        setisReady(true);
   
    }
    
    
    return (<div>
        <input  type="file" onChange={handleChange} ></input>
        <input type="text" onChange={handleChange2} value={name}></input>
        <br />
        <button onClick={save}>Add Post</button>
        <br>
        </br>
        {/* {isReady?
        <div style={{display:'flex', justifyContent:'flex-start', alignContent:'center',maxWidth:'33.33%'}}>

        {state.posts.Posts.map((post,index)=>post.postPath?( <div key={index}>
        <img style={{height:'200px', width:'200px'}} src={post.postPath} />
        </div>):null)
       
        }
        
        </div>
        :
        <CircularProgress />
} */}
       
    </div>  );
}
 
export default Post;