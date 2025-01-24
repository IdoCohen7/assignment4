import { Text, View } from "react-native";
import { StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const [text, onChangeNumber] = useState("some text");
  const [txtsayHello, setSayHello] = useState("");

  const btnSayHello = () => {
    setSayHello("Hello " + text);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5E1", // Light cream background
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My Recipe Book!</Text>

        <Button
          title="Add New Recipe"
          style={styles.button}
          onPress={btnSayHello}
        />
        <Button title="View All Recipes" style={styles.button} />

        <Link
          href="(tabs)/properties"
          style={{
            color: "blue",
            borderRadius: 2,
            borderColor: "black",
            borderWidth: 2,
            padding: 5,
            margin: 5,
          }}
        >
          Tabs
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFF5E1", // Light cream color for the background
    alignItems: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#F1C27D", // Soft orange color for border
    borderRadius: 6,
    backgroundColor: "#F1C27D", // Orange background
    color: "#20232a",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: "#F1C27D", // Orange background for buttons
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#F1C27D", // Orange border for the input field
    padding: 10,
    borderRadius: 6,
  },
});
