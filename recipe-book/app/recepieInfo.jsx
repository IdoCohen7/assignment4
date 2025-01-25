import { useContext, useState, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { RecipeContext } from "../context/RecipeContext.js";
import { useFocusEffect, useLocalSearchParams } from "expo-router";

export default function RecepieInfo() {
  const { recipes, updateRecipe } = useContext(RecipeContext);
  const { recipeId } = useLocalSearchParams();

  const selectedRecipe = recipes.find((r) => r.id === recipeId);

  const [editedRecipe, setEditedRecipe] = useState(selectedRecipe);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedRecipe) {
      setEditedRecipe(selectedRecipe);
    }
  }, [selectedRecipe]);

  useFocusEffect(
    useCallback(() => {
      return () => setIsEditing(false);
    }, [])
  );

  const handleSave = () => {
    updateRecipe(editedRecipe);
    setIsEditing(false);
  };

  if (!editedRecipe) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Paragraph style={styles.errorText}>Recipe not found</Paragraph>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              <Card style={styles.card}>
                <Card.Content>
                  <View style={styles.titleContainer}>
                    {isEditing ? (
                      <TextInput
                        style={styles.inputTitle}
                        value={editedRecipe.name}
                        onChangeText={(text) =>
                          setEditedRecipe({ ...editedRecipe, name: text })
                        }
                        placeholder="Recipe Name"
                      />
                    ) : (
                      <Title style={styles.title}>{editedRecipe.name}</Title>
                    )}
                  </View>

                  <Paragraph style={styles.subtitle}>Ingredients:</Paragraph>
                  {isEditing ? (
                    <TextInput
                      style={styles.input}
                      multiline
                      value={editedRecipe.ingredients.join(", ")}
                      onChangeText={(text) =>
                        setEditedRecipe({
                          ...editedRecipe,
                          ingredients: text.split(", "),
                        })
                      }
                      placeholder="Enter ingredients separated by commas"
                    />
                  ) : (
                    <Paragraph style={styles.contentText}>
                      {editedRecipe.ingredients.join(", ")}
                    </Paragraph>
                  )}

                  <Paragraph style={styles.subtitle}>Instructions:</Paragraph>
                  {isEditing ? (
                    <TextInput
                      style={[styles.input, styles.textArea]}
                      multiline
                      value={editedRecipe.instructions}
                      onChangeText={(text) =>
                        setEditedRecipe({ ...editedRecipe, instructions: text })
                      }
                      placeholder="Enter cooking instructions"
                    />
                  ) : (
                    <Paragraph style={styles.contentText}>
                      {editedRecipe.instructions}
                    </Paragraph>
                  )}
                </Card.Content>

                <Card.Actions style={styles.actions}>
                  {isEditing ? (
                    <Button mode="contained" onPress={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button mode="contained" onPress={() => setIsEditing(true)}>
                      Edit
                    </Button>
                  )}
                </Card.Actions>
              </Card>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5E1",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F1C27D",
    marginTop: 15,
  },
  contentText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "center",
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#F1C27D",
    padding: 8,
    marginVertical: 10,
    color: "#333",
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#F1C27D",
    padding: 8,
    color: "#333",
    textAlign: "center",
    width: "100%",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  actions: {
    padding: 15,
    justifyContent: "center",
  },
  errorText: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});
