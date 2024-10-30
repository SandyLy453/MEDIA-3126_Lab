import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Mochi() {
    return( 
        <ScrollView style={styles.page}>
            <View className="mx-4 my-8">
                <Text style={styles.title}>This is about Mochi 🍡</Text>
                <Link href="/sandwich">
                    <Text style={styles.link}>This is a 🥪</Text>
                </Link>
                <Link href="/">
                    <Text className="border-lime-700 border-2 rounded-xl">👉🏻 This is Index Page</Text>
                </Link>

                <View style={styles.content}>
                    <Text style={styles.title}>What is mochi?</Text>
                    <Text style={styles.text}>
                        A Japanese rice cake made of mochigome (もち米), a short-grain japonica glutinous rice, 
                        and sometimes other ingredients such as water, sugar, and cornstarch.
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>How to make mochi?</Text>
                    <Text style={styles.text}>
                        Traditionally, mochi is made by pounding steamed short-grain Japanese sticky rice, 
                        called mochigome, with a wooden mallet during a ceremony called mochitsuki.
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Type of mochi:</Text>
                    <Text style={styles.text}> ✔️ Sakura Mochi</Text>
                    <Text style={styles.text}> ✔️ Kusha Mochi</Text>
                    <Text style={styles.text}> ✔️ Hishi Mochi</Text>
                    <Text style={styles.text}> ✔️ Kinako Mochi</Text>
                    <Text style={styles.text}> ✔️ Dangoi</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
    content: {
        borderColor: 'limegreen',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
    },
    link: {
        fontSize: 18,
        color: 'blue',
        marginVertical: 5,
        textDecorationLine: 'underline',
    },
    page: {
        minHeight: 100,
    },
});




