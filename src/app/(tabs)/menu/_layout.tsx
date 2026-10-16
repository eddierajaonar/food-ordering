import { Stack } from "expo-router";

import { useColorScheme } from "@/src/components/useColorScheme";


export const unstable_settings = {
  // Keep the menu list under the details screen, even when opening /menu/[id] directly
  initialRouteName: "index",
};

export default function MenuStack() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Menu"  }}/>
      <Stack.Screen name="[id]" options={{ title: "Détails" }} />
    </Stack>
  );
}
