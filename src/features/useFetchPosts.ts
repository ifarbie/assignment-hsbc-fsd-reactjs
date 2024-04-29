import usePostStore, { Post } from "../lib/zustand/usePostStore";
import axiosInstance from "../lib/axios/axios";
import { useQuery } from "react-query";

const useFetchPosts = () => {
    const { setPosts, posts } = usePostStore();
    const results = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: () => {
            return axiosInstance.get("/posts?_limit=5").then((res) => res.data);
        },
        onSuccess: (data: Post[]) => {
            if (data) setPosts(data)
        }
    });
    
    return { ...results, postsList: posts };
};

export default useFetchPosts;
