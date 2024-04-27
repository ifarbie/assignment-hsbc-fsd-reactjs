import {   Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import EditPostIcon from "./actions-button/EditPostIcon";
import DeletePostIcon from "./actions-button/DeletePostIcon";

const PostCard: FC<{ id: number; title: string; body: string }> = ({ id, title, body }) => {
    return (
        <Card key={id}>
            <CardHeader>
                <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{body}</Text>
            </CardBody>
            <CardFooter justifyContent={"space-between"}>
                <EditPostIcon title={title} body={body} id={id} />
                <DeletePostIcon id={id} />
            </CardFooter>
        </Card>
    );
};

export default PostCard;
