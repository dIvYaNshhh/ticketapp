import Container from "@/components/Container";
import { View, ImageBackground } from "react-native";
import bgImage from "@/assets/images/bg-image.png";
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();
  return (
    <Container style={"flex-1"}>
      <ImageBackground
        className="flex-1 bg-[#202020]"
        source={bgImage}
        resizeMode="contain"
      >
        <View className="justify-end flex-1">
          <ThemedButton
            title="Guest View"
            onPress={() => {
              router.push("/guest");
            }}
            containerStyles="m-4"
          />
          <ThemedButton
            title="Questionaries"
            onPress={() => {
              router.push("/questionaire");
            }}
            containerStyles="m-4"
          />
        </View>
      </ImageBackground>
    </Container>
  );
}
