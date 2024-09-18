import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Paper() {
    return (
        <View>
            <Text>This is a a page </Text>
            <Link href={"/sandwich"}>This is a 🥪</Link>
        </View>
    )
}




