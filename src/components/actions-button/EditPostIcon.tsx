import {
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Textarea,
    Button,
    useToast,
} from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import useEditPost from "../../features/useEditPost";
import { useDisclosure } from "@chakra-ui/react";
import usePostStore from "../../lib/zustand/usePostStore";
import { EditIcon } from "@chakra-ui/icons";
import { Post } from "../../lib/zustand/usePostStore";

const EditPostIcon: FC<{ title: string, body: string, id: number }> = ({ title, body, id }) => {
    const editDisclosure = useDisclosure();
    const initialRef = useRef(null);
    const [formData, setFormData] = useState({
        title,
        body,
    });
    const { mutate: editMutate, isLoading: editIsLoading } = useEditPost();
    const { updateOnePost } = usePostStore();
    const toast = useToast();

    return (
        <>
            <EditIcon fontSize={"xl"} color={"orange"} cursor={"pointer"} onClick={editDisclosure.onOpen} />
            <Modal initialFocusRef={initialRef} isOpen={editDisclosure.isOpen} onClose={editDisclosure.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const editDatas = {
                                id,
                                title: formData.title,
                                body: formData.body,
                                userId: 1,
                            };
                            editMutate(editDatas, {
                                onError(_, data: Post) {
                                    updateOnePost(data.id, data);
                                    editDisclosure.onClose();
                                    toast({
                                        title: "Post Edited!",
                                        status: "info",
                                        position: "top-right",
                                        isClosable: true,
                                    });
                                },
                                onSuccess: ({ data }) => {
                                    updateOnePost(data.id, data);
                                    editDisclosure.onClose();
                                    toast({
                                        title: "Post Edited!",
                                        status: "info",
                                        position: "top-right",
                                        isClosable: true,
                                    });
                                },
                            });
                        }}
                    >
                        <ModalHeader>Edit Post</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Post Title</FormLabel>
                                <Input
                                    ref={initialRef}
                                    value={formData.title}
                                    onChange={(e) => {
                                        setFormData({ ...formData, title: e.target.value });
                                    }}
                                />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Post Body</FormLabel>
                                <Textarea
                                    value={formData.body}
                                    onChange={(e) => {
                                        setFormData({ ...formData, body: e.target.value });
                                    }}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3} isLoading={editIsLoading}>
                                Save
                            </Button>
                            <Button onClick={editDisclosure.onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditPostIcon;
