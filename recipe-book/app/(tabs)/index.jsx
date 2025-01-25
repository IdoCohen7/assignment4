import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext.js";

export default function Index() {
  const { recipes, setRecipes } = useContext(RecipeContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My Recipe Book!</Text>

        <Text style={styles.recipeCount}>
          Number of Recipes: {recipes.length}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5E1",
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
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
  button: {
    marginVertical: 10,
    width: "80%",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderColor: "#F1C27D",
    padding: 10,
    borderRadius: 6,
  },
  recipeCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
});
