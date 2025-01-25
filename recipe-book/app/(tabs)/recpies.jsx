import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext.js";
import { List } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Recepies() {
  const { recipes } = useContext(RecipeContext);
  const router = useRouter();
  console.log("recipes: ", recipes);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>All Recepies:</Text>
      {recipes.map((recipe) => (
        <List.Item
          key={recipe.id}
          title={recipe.name}
          left={(props) => <List.Icon {...props} icon="food" />}
          style={styles.listItem}
          titleStyle={styles.recipeTitle}
          onPress={() =>
            router.push({
              pathname: "../recepieInfo",
              params: { recipeId: recipe.id },
            })
          }
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5E1", // Light cream background for consistency
    padding: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#F1C27D",
    borderRadius: 6,
    backgroundColor: "#F1C27D",
    color: "#20232a",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
