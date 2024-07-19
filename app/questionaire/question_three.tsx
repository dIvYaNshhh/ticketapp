import ThemedButton from "@/components/ThemedButton";
import { Text, View } from "react-native";
import { QuestionProps } from ".";

export default function QuestionThree({ onPress }: QuestionProps) {
  return (
    <View className="flex-1">
      <View className="mb-auto justify-center mt-16 p-12">
        <Text className="text-[#6C63FF] text-base font-semibold">
          QUESTION 3 OF 4
        </Text>
        <Text className="text-black text-2xl font-semibold mt-2">
          Are you a current student?:
        </Text>

        <ThemedButton
          title="Yes"
          onPress={onPress}
          containerStyles=" mt-16 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
        <ThemedButton
          title="No"
          onPress={onPress}
          containerStyles=" mt-4 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
      </View>
    </View>
  );
}
