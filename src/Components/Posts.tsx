import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsApi } from '../Redux/Posts/PostActions';
// import { PostsState } from '../Models/UsersState';

function Posts() {
    const PostsState: any = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('post container mount');
        dispatch(fetchPostsApi());
    }, []);

    console.log('post state is  ', PostsState);
    return (
        <div>
            Posts
            {
                PostsState && PostsState.loading ?
                    "posts loading" :
                    PostsState.error ?
                        PostsState.error :
                        PostsState.Posts ?
                            PostsState.Posts.map((post) => {
                                return (
                                    <div key={post.id}>
                                        {post.id}.&nbsp;
                                        {post.body}
                                    </div>
                                )
                            })
                            :
                            'no post'
            }

        </div>
    )
}

export default Posts
