import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import { router } from "expo-router";
import Colors from "@/src/constants/Colors";


export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => router.push("/cart")}>
            {({ pressed }) => (
              <FontAwesome
                name="shopping-cart"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              ></FontAwesome>
            )}
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
      <Stack.Screen name="[id]" options={{ title: "Détails" }} />
    </Stack>
  );
}
