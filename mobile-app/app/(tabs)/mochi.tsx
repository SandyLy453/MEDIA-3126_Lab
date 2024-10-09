import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Mochi() {
    return( 
        <ScrollView style={style.page}>
            <View className="mx-2 my-4">
                {/* <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"><div className="transition duration-300 group-hover:rotate-[360deg]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-200"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path></svg></div></button> */}
                <Text className="border-lime-700 border-2 rounded-xl">This is about Mochi 🍡</Text>
                <Link href={"/sandwich"}>This is a 🥪</Link>
                <Link href={"/"}>👉🏻 This is Index Page</Link>

                {/* <div style={style.content}>
                    <p style={style.title}>What is mochi?</p>
                    <p style={style.text}>a Japanese rice cake made of mochigome (もち米), a short-grain japonica glutinous rice, 
                        and sometimes other ingredients such as water, sugar, and cornstarch.</p>
                </div>

                <div style={style.content}>
                    <p style={style.title}>How to make mochi?</p>
                    <p style={style.text}>Traditionally, mochi is made by pounding steamed short-grain Japanese sticky rice, 
                        called mochigome, with a wooden mallet during a ceremony called mochitsuki.</p>
                </div>

                <div style={style.content}>
                    <p style={style.title}>Type of mochi?</p>
                    <p style={style.text}> ✔️ Sakura Mochi</p>
                    <p style={style.text}> ✔️ Kusha Mochi</p>
                    <p style={style.text}> ✔️ Hishi Mochi</p>
                    <p style={style.text}> ✔️ Kinako Mochi</p>
                    <p style={style.text}> ✔️ Dangoi</p>
                </div> */}
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create ({
    title: {
        fontSize: 24,
    },
    content: {
        borderColor: 'green',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        margin: 15,
    },
    page: {
        minHeight: 100,
        
    }
})




