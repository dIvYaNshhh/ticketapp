import ThemedButton from "@/components/ThemedButton";
import { useState } from "react";
import { Text, View } from "react-native";
import { QuestionProps } from ".";

export default function QuestionFour({ onPress }: QuestionProps) {
  const [isLinkedInEnabled, setLinkedInEnabled] = useState(false);
  const [isInstaEnabled, setInstaEnabled] = useState(false);
  const [isTwitterEnabled, setTwitterEnabled] = useState(false);
  const [isFBEnabled, setFBEnabled] = useState(false);
  const isClaimBtnEnabled =
    isLinkedInEnabled || isInstaEnabled || isTwitterEnabled || isFBEnabled;
  return (
    <View className="flex-1">
      <View className="mb-auto justify-center mt-16 p-12">
        <Text className="text-[#6C63FF] text-base font-semibold">
          QUESTION 4 OF 4
        </Text>
        <Text className="text-black text-2xl font-semibold mt-2">
          Where did you hear about this event?:
        </Text>

        <ThemedButton
          title="LinkedIn"
          showCheckBox={true}
          onPress={(data?: boolean) => {
            setLinkedInEnabled(data ?? false);
          }}
          containerStyles=" mt-16 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
        <ThemedButton
          title="Instagram"
          onPress={(data?: boolean) => {
            setInstaEnabled(data ?? false);
          }}
          showCheckBox={true}
          containerStyles=" mt-4 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
        <ThemedButton
          title="Twitter"
          onPress={(data?: boolean) => {
            setTwitterEnabled(data ?? false);
          }}
          showCheckBox={true}
          containerStyles=" mt-4 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
        <ThemedButton
          title="Facebook"
          onPress={(data?: boolean) => {
            setFBEnabled(data ?? false);
          }}
          showCheckBox={true}
          containerStyles=" mt-4 bg-[#f5f1ff] rounded-md min-h-[62px]"
          textStyles="text-[#6C63FF] font-semibold text-md"
        />
      </View>
      {isClaimBtnEnabled && (
        <ThemedButton
          title="Claim ticket"
          onPress={onPress}
          containerStyles="m-12 mt-auto bg-[#6368ff] rounded-full min-h-[40px] mb-16"
          textStyles="text-white font-normal text-md"
        />
      )}
    </View>
  );
}
