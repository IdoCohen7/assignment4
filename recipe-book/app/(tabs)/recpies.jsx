import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext.js";
import { List } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "../../styles/recpiesStyles.js";

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
