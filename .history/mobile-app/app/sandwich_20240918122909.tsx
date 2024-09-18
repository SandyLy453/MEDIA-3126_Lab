import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Sandwich() {
    return (
        <View>
            <Text>This is a 🥪</Text>
            <Link href={"/mochi"}>This is a 🍡</Link>
        </View>
    )
}




