import axiosInstance from "../lib/axios/axios"
import { useMutation } from "react-query"

const useDeletePost = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return axiosInstance.delete(`/posts/${id}`)
        },
    })
}

export default useDeletePost
