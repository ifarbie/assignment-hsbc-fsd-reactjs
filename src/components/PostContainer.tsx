import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Post } from "../lib/zustand/usePostStore";
import PostCard from "./PostCard";
import { FC } from "react";

const PostContainer: FC<{ isLoading: boolean; postsList: Post[] }> = ({ isLoading, postsList }) => {
    return (
        <Box>
            <SimpleGrid spacing={3} templateColumns="repeat(1, minmax(200px, 1fr))">
                {isLoading ? (
                        <Spinner mx={"auto"} size={"xl"} />
                ) : null}
                {postsList.length ? (
                    <>
                        {postsList?.sort((a, b) => b.id - a.id).map((post: Post) => (
                            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
                        ))}
                    </>
                ) : (
                    <Text textAlign={"center"}>No posts found</Text>
                )}
            </SimpleGrid>
        </Box>
    );
};

export default PostContainer;
