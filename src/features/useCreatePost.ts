import { useMutation } from "react-query";
import axiosInstance from "../lib/axios/axios";
import { PostForm } from "../lib/zustand/usePostStore";

const useCreatePost = () => {
    return useMutation({
        mutationFn: (data: PostForm) => {
            return axiosInstance.post("/posts", data);
        },
    });
};

export default useCreatePost;
