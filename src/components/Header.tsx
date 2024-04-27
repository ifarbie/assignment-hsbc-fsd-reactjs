import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
    return (
        <Box p={3} fontSize={"2xl"} borderBottom={"1px"} mb={4}>
            <Text fontWeight={700} fontSize={"3xl"} textAlign={"center"}>
                CRUD Posts - React
            </Text>
        </Box>
    );
};

export default Header;
