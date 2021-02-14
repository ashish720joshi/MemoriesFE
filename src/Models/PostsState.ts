export interface PostState {
    users: Posts[],
    loading: boolean;
    error: string;
}

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

