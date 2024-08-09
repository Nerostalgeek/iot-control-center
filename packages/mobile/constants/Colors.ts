/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#007AFF";
const tintColorDark = "#0A84FF";

export const Colors = {
  light: {
    text: "#000000",
    background: "#FFFFFF",
    tint: tintColorLight,
    icon: "#8E8E93",
    tabIconDefault: "#8E8E93",
    tabIconSelected: tintColorLight,
    secondaryText: "#8E8E93",
    border: "#E5E5EA",
    error: "#FF3B30",
    success: "#34C759",
    cardBackground: "#F2F2F7",
  },
  dark: {
    text: "#FFFFFF",
    background: "#1C1C1E",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    secondaryText: "#8E8E93",
    border: "#38383A",
    error: "#FF453A",
    success: "#30D158",
    cardBackground: "#2C2C2E",
  },
};
