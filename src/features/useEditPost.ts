import { useMutation } from "react-query";
import { Post } from "../lib/zustand/usePostStore";
import axiosInstance from "../lib/axios/axios";

const useEditPost = () => {
    return useMutation({
        mutationFn: (data: Post) => {
            return axiosInstance.put(`/posts/${data.id}`, data);
        },
    });
};

export default useEditPost;
