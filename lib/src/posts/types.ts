export declare type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export declare type NewPost = Omit<Post, 'id'>;