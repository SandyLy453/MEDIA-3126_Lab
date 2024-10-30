import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Sandwich() {
    return (
        <View>
            <Text>This is about 🥪</Text>
            <Link href={"/mochi"}>This is a 🍡</Link>
            <Link href={"/camera"}>This is a 📷</Link>
            <Link href={"/"}>👉🏻 This is Index Page</Link>
        </View>
    )
}




