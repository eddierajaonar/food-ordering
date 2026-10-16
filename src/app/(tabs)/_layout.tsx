import {Tabs} from "expo-router";
import {SymbolView} from "expo-symbols";

import {useClientOnlyValue} from "@/src/components/useClientOnlyValue";
import {useColorScheme} from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}
        >
            <Tabs.Screen name="index" options={{href: null}}/>
            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({color}) => (
                        <SymbolView
                            name={{
                                ios: "fork.knife",
                                android: "fork_spoon",
                                web: "fork_spoon",
                            }}
                            tintColor={color}
                            size={28}
                        />
                    ),
                    // The nested Stack in menu/_layout.tsx renders its own header (with back button)
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: "Orders",
                    tabBarIcon: ({color}) => (
                        <SymbolView
                            name={{
                                ios: "chevron.left.forwardslash.chevron.right",
                                android: "list",
                                web: "list",
                            }}
                            tintColor={color}
                            size={28}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
