import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Mochi() {
    return( 
    <View>
            <Text>This is about Mochi 🍡</Text>
            <Link href={"/sandwich"}>This is a 🥪</Link>
        </View>
    )
}




