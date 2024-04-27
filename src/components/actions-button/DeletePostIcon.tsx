import { DeleteIcon } from "@chakra-ui/icons";
import usePostStore, { Post } from "../../lib/zustand/usePostStore";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import { FC, useRef } from "react";
import useDeletePost from "../../features/useDeletePost";

const DeletePostIcon: FC<{id: number}> = ({id}) => {
    const toast = useToast();
    const deleteDisclosure = useDisclosure();
    const cancelRef = useRef(null);
    const { setPosts, posts } = usePostStore();
    const { mutate: deleteMutate, isLoading: deleteIsLoading } = useDeletePost();

    return (
        <>
            {!deleteIsLoading ? (
                <>
                    <DeleteIcon fontSize={"xl"} color={"red"} cursor={"pointer"} onClick={deleteDisclosure.onOpen} />
                    <AlertDialog isOpen={deleteDisclosure.isOpen} leastDestructiveRef={cancelRef} onClose={deleteDisclosure.onClose}>
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                    Delete Post?
                                </AlertDialogHeader>

                                <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={deleteDisclosure.onClose}>
                                        Cancel
                                    </Button>
                                    <Button
                                        colorScheme="red"
                                        onClick={() => {
                                            deleteMutate(id, {
                                                onSuccess: () => {
                                                    setPosts(posts.filter((post: Post) => post.id !== id));
                                                    toast({
                                                        title: "Post Deleted!",
                                                        status: "info",
                                                        position: "top-right",
                                                        isClosable: true,
                                                    });
                                                },
                                            });
                                        }}
                                        ml={3}
                                    >
                                        Delete
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </>
            ) : (
                <Spinner color="red.500" />
            )}
        </>
    );
};

export default DeletePostIcon;
