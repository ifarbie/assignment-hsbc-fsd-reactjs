import { create } from "zustand";


export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type PostForm = Omit<Post, 'id' | 'userId'>

type PostState = {
    posts: Post[];
    title: string;
    body: string;
}

type PostAction = {
    setPosts: (posts: Post[]) => void;
    updateOnePost: (postId: number, editedPost: Post) => void;
    setTitle: (title: string) => void,
    setBody: (body: string) => void,
}

type PostStore = PostState & PostAction

const usePostStore = create<PostStore>((set) => ({
    posts: [],
    title: "",
    body: "",
    
    updateOnePost: (postId: number, editedPost: Post) => set((prev: PostStore) => {
        const prevPosts = prev.posts;
        const updatedPosts = prevPosts.map((post: Post) => {
            if (post.id === postId) {
                // Update data pos yang sesuai dengan ID
                return editedPost;
            }
            return post;
        });
        return { posts: updatedPosts };
    }),
    setPosts: (postsParams: Post[]) => set({ posts: postsParams }),
    setTitle: (title: string) => set({ title }),
    setBody: (body: string) => set({ body }),
}));

export default usePostStore