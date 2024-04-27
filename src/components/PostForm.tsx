import { Button, FormControl, Heading, Input, Textarea, useToast } from "@chakra-ui/react";
// import usePostFormStore from "../lib/zustand/usePostFormStore";
import useCreatePost from "../features/useCreatePost";
import { FC } from "react";
import usePostStore from "../lib/zustand/usePostStore";

const PostForm: FC = () => {
    const { setBody, setTitle, setPosts, posts, title, body } = usePostStore();
    const { mutate, isLoading } = useCreatePost();
    const toast = useToast();
    return (
        <form className="w-full"
            onSubmit={(e) => {
                e.preventDefault();
                mutate(
                    { title, body },
                    {
                        onSuccess: ({ data }) => {
                            const randomId: number = Number(new Date());
                            const processedData = {
                                userId: 1,
                                id: randomId,
                                title: data.title,
                                body: data.body,
                            };
                            setPosts([...posts, processedData]);
                            setTitle("");
                            setBody("");
                            toast({
                                title: "Post Created!",
                                status: "success",
                                position: "top-right",
                                isClosable: true,
                            });
                        },
                    }
                );
            }}
        >
            <FormControl isRequired>
                <Heading fontSize={"xl"}>Create a Post!</Heading>
                <Input variant="flushed" placeholder="Post title" onChange={(e) => setTitle(e.target.value)} value={title} isDisabled={isLoading} autoComplete="off" />
                <Textarea variant={"flushed"} placeholder="Describe your day!" mb={3} onChange={(e) => setBody(e.target.value)} value={body} isDisabled={isLoading} />
                <Button w={"full"} colorScheme="teal" type="submit" isLoading={isLoading}>
                    Post!
                </Button>
            </FormControl>
        </form>
    );
};

export default PostForm;
