import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSearchParams } from "expo-router";
export default function AppLayout() {
  const { param } = useSearchParams();
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="[CharacterInfo]"
        options={{
          header: () => null,
          href: "/search/[search]",
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#E1050B" />
          ),
          href: {
            pathname: "/Character/[CharacterInfo]",
            params: {
              param: param,
            },
          },
        }}
      />
      <Tabs.Screen
        name="Comics"
        initialParams={{ param }}
        options={{
          header: () => null,
          title: "Comics",
          tabBarIcon: () => (
            <Feather name="book-open" size={24} color="#E1050B" />
          ),
          href: "/Character/Comics",
        }}
      />
    </Tabs>
  );
}
