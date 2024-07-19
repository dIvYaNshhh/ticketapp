import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient
      colors={colors}
      className="flex-1"
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default AppGradient;
