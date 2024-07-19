import ThemedButton from "@/components/ThemedButton";
import { Text, View, TextInput } from "react-native";
import { QuestionProps } from ".";

export default function QuestionOne({onPress}: QuestionProps) {
  return (
    <View className="flex-1">
      <View className="mb-auto justify-center mt-16 p-12">
        <Text className="text-[#6C63FF] text-base font-semibold">
          QUESTION 1 OF 4
        </Text>
        <Text className="text-black text-2xl font-semibold mt-2">
          Comapny/Organization:
        </Text>
        <TextInput
          placeholder="Write your answer"
          placeholderTextColor={"#6b63ff61"}
          className="text-[#6C63FF] font-semibold text-3xl mt-8"
        />
      </View>
      <ThemedButton
        title="Next Question"
        onPress={onPress}
        containerStyles="m-12 mt-auto bg-[#6368ff] rounded-full min-h-[40px] mb-16"
        textStyles="text-white font-normal text-md"
      />
    </View>
  );
}
