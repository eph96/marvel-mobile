import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function AppLayout() {
  const { param } = useSearchParams();
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="[comicInfo]"
        options={{
          header: () => null,
          href: "/search/[search]",
          tabBarIcon: () => (
            <Feather name="book-open" size={24} color="#E1050B" />
          ),
          href: {
            pathname: "/Comics/[comicInfo]",
            params: {
              param: param,
            },
          },
        }}
      />
{/*       <Tabs.Screen
        name="Characters"
        initialParams={{ param }}
        options={{
          header: () => null,
          title: "Characters",
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#E1050B" />
          ),
          href: "/Comics/Characters",
        }}
      />

      <Tabs.Screen
        name="Creators"
        initialParams={{ param }}
        options={{
          header: () => null,
          title: "Creators",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="typewriter"
              size={24}
              color="#E1050B"
            />
          ),
          href: "/Comics/Creators",
        }}
      /> */}
    </Tabs>
  );
}
