import { StyleSheet } from "react-native";

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

export default styles;
