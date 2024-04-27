import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./lib/tailwind/index.css";
import "./lib/tailwind/root.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Box className="bg-black">
                    <App />
                </Box>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
