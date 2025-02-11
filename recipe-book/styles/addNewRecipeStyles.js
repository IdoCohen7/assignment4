import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5E1", // Light cream background for consistency
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#20232a",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#F1C27D",
    width: "100%",
    borderRadius: 6,
    padding: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
