import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { RecipeProvider } from "../context/RecipeContext.js";

export default function TabLayout() {
  return (
    <RecipeProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="(tabs)/index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/recpies"
          options={{
            tabBarLabel: "Recipes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/addNewRecipe"
          options={{
            tabBarLabel: "Add New Recipe",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="recepieInfo"
          options={{
            href: null, // Hide this page from tabs
          }}
        />
      </Tabs>
    </RecipeProvider>
  );
}
