import {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import ThemedButton from "./ThemedButton";
import { View } from "react-native";

interface FooterProps extends BottomSheetFooterProps {}
export default function FootComponent({ animatedFooterPosition }: FooterProps) {
  return (
    <BottomSheetFooter animatedFooterPosition={animatedFooterPosition}>
      <View className="bg-white showdow px-4">
        <ThemedButton
          title="Buy tickets"
          onPress={() => {}}
          containerStyles="m-8  bg-[#6368ff] rounded-full min-h-[40px] shadow"
          textStyles="text-white font-normal text-md"
        />
      </View>
    </BottomSheetFooter>
  );
}
