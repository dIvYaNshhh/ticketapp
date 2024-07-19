import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface ThemedButtonProps {
  onPress: (isSelected?: boolean) => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  showCheckBox?: boolean;
}

const ThemedButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
  showCheckBox = false,
}: ThemedButtonProps) => {
  const [onItemSelected, setOnItemSelected] = React.useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white flex-row rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
      onPress={() => {
        setOnItemSelected((prev) => {
          return !prev;
        });
        onPress(!onItemSelected);
      }}
    >
      <Text
        className={`ml-4 flex-1 text-center text-primary font-semibold text-lg ${textStyles}`}
      >
        {title}
      </Text>
      <View className="justify-end items-end mr-4">
        {showCheckBox && onItemSelected && (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={24}
            color="#6C63FF"
          />
        )}
        {showCheckBox && !onItemSelected && <View className="w-6" />}
      </View>
    </TouchableOpacity>
  );
};

export default ThemedButton;
