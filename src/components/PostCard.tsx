import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import EditPostIcon from "./actions-button/EditPostIcon";
import DeletePostIcon from "./actions-button/DeletePostIcon";

const PostCard: FC<{ id: number; title: string; body: string }> = ({ id, title, body }) => {
    return (
        <Card key={id} variant={"outline"} bg={"black"} color={"white"}>
            <CardHeader>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar src='https://bit.ly/broken-link' />
                    <Box>
                        <Heading size="sm">Anonymous</Heading>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody mt={-4}>
                <Heading mb={1.5} size="md">{title}</Heading>
                <Text>{body}</Text>
            </CardBody>
            <CardFooter mt={-4} justifyContent={"space-between"}>
                <EditPostIcon title={title} body={body} id={id} />
                <DeletePostIcon id={id} />
            </CardFooter>
        </Card>
    );
};

export default PostCard;
