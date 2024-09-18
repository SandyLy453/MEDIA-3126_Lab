import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Sandwich() {
    return (
        <View>
            <Text>This is about 🥪</Text>
            <Link href={"/mochi"}>This is a 🍡</Link>
            <Link href={"index"}>This is Index Page</Link>
        </View>
    )
}




