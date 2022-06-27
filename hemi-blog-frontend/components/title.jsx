import { Text } from "@chakra-ui/react";

export default function Title(props) {
    return (
        <Text {...props} fontSize="xx-large" fontWeight="bold">
            {props.children}
        </Text>
    )
}
