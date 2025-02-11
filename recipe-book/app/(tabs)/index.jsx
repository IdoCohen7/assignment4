import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext.js";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "../../styles/indexStyles.js";

export default function Index() {
  const { recipes } = useContext(RecipeContext);
  const router = useRouter();

  const latestRecipe = recipes.length > 0 ? recipes[recipes.length - 1] : null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome to My Recipe Book! 🍽️</Text>
        <Text style={styles.subtitle}>
          Discover, Create, and Enjoy Delicious Recipes!
        </Text>

        <Text style={styles.recipeCount}>
          You Have {recipes.length} Recipes!
        </Text>
        <Text style={styles.recipeCount}>Latest Recipe:</Text>

        {latestRecipe && (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>{latestRecipe.name}</Title>
              <Paragraph numberOfLines={2} style={styles.cardText}>
                {latestRecipe.ingredients.join(", ")}
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="contained"
                buttonColor="#FF9800"
                onPress={() =>
                  router.push({
                    pathname: "../recepieInfo",
                    params: { recipeId: latestRecipe.id },
                  })
                }
              >
                View
              </Button>
            </Card.Actions>
          </Card>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
