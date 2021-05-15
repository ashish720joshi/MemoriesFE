export interface PostState {
    users: Post[],
    loading: boolean;
    error: string;
}

export interface Post {
    userId: number;
    postId?: number;
    postName: string;
    post: any;
    type_:string;
    likes?:number;
    metaCreatedAt?:Date;
    activityId?:number;
}

