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
  Alert,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { RecipeContext } from "../context/RecipeContext.js";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import styles from "../styles/recepieInfoStyles.js";

export default function RecepieInfo() {
  const { recipes, updateRecipe, deleteRecipe } = useContext(RecipeContext);
  const { recipeId } = useLocalSearchParams();
  const router = useRouter();

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

  const handleDelete = () => {
    Alert.alert(
      "Delete Recipe",
      "Are you sure you want to delete this recipe? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteRecipe(recipeId);
            router.replace("/"); // Redirect to home page after deleting
          },
        },
      ]
    );
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
                    <Button
                      mode="contained"
                      buttonColor="#4CAF50"
                      onPress={handleSave}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      mode="contained"
                      buttonColor="#FF9800"
                      onPress={() => setIsEditing(true)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    mode="contained"
                    buttonColor="#D32F2F"
                    onPress={handleDelete}
                  >
                    Delete
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
