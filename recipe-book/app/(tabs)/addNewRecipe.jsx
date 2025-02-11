import { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { RecipeContext } from "../../context/RecipeContext.js";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/addNewRecipeStyles.js";

export default function AddNewRecipe() {
  const { addRecipe } = useContext(RecipeContext);

  // Form state
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Handle form submission
  const handleAddRecipe = () => {
    if (!name || !ingredients || !instructions) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newRecipe = {
      id: uuidv4(),
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions,
    };

    addRecipe(newRecipe);

    // Reset form fields
    setName("");
    setIngredients("");
    setInstructions("");

    Alert.alert("Success", "Recipe added successfully!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.header}>Add a New Recipe</Text>

            <Input
              placeholder="Recipe Name"
              value={name}
              onChangeText={setName}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />

            <Input
              placeholder="Ingredients (comma separated)"
              value={ingredients}
              onChangeText={setIngredients}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />

            <Input
              placeholder="Instructions"
              value={instructions}
              onChangeText={setInstructions}
              multiline
              numberOfLines={4}
              containerStyle={styles.inputContainer}
              inputStyle={[styles.input, styles.textArea]}
            />

            <Button
              title="Add Recipe"
              onPress={handleAddRecipe}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
