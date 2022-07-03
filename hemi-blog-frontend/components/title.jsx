import { Text } from "@chakra-ui/react";

export default function TitleComponent(props) {
    return (
        <Text {...props} fontSize="xx-large" fontWeight="bold">
            {props.children}
        </Text>
    )
}
