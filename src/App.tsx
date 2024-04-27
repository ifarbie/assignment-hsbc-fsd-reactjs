import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import useFetchPosts from "./features/useFetchPosts";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostContainer from "./components/PostContainer";

const App: FC = () => {
    const { postsList, isLoading } = useFetchPosts();
    return (
        <Box maxW={"1366px"} mx={"auto"} textColor={"white"}>
            <Header />
            <Flex gap={10} px={9} direction={"column"} justifyContent={"center"} maxW={"1000px"} mx={"auto"} pb={10}>
                {/* POST FORM */}
                <PostForm />
                {/* POST CONTAINER */}
                <PostContainer isLoading={isLoading} postsList={postsList} />
            </Flex>
        </Box>
    );
};

export default App;
