import { SafeAreaView, View } from "react-native";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}
export default function Container({ children, style }: ContainerProps) {
  return (
    <SafeAreaView className="flex-1">
      <View className={`${style}`}>{children}</View>
    </SafeAreaView>
  );
}
