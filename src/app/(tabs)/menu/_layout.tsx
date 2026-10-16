import { Stack } from "expo-router";
import { useColorScheme } from "@/src/components/useColorScheme";


export default function MenuStack() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Menu"  }}/>
      <Stack.Screen name="[id]" options={{ title: "Détails" }} />
    </Stack>
  );
}
