// import { PostState } from '../../Models/UsersState';
import 
{ Fetch_Posts, Fetch_Posts_Success, Fetch_Posts_Failure,Add_Post,Add_Post_Success,Add_Post_Failure, Like_Post, Get_Likes, Fetch_Comments }
 from './PostTypes';

const initialState: any = {
    loading: false,
    Posts: [],
    error: '',
    addPostLoader:false,
    addPostError:''
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Posts:
          console.log("4");
            return (
                {
                    ...state,
                    loading: true
                }
            )
        case Fetch_Posts_Success:
          console.log("8");
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

            case Add_Post:
                return({
                    ...state,
                    addPostLoader:true
                }) ;

                case Add_Post_Success:
                    return({
                        ...state,
                        addPostLoader:false
                    })

                    case Add_Post_Failure:
                        return({
                            ...state,
                            addPostLoader:false,
                            addPostError:action.payload
                        })

                        case Get_Likes:
                            return({

                            })

                            case Fetch_Comments:
                                return({
                                    ...state,
                                    comments:action.payload
                                })

                       
        default:
            return state;
    }
}