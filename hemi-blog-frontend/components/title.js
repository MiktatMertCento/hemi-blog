import { Text } from "@chakra-ui/react";

export default function Title({ children }) {
    return (
        <Text fontSize="xx-large" fontWeight="bold">
            {children}
        </Text>
    )
}
