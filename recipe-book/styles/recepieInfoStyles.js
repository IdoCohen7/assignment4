import { StyleSheet } from "react-native";

const recipeInfoStyles = StyleSheet.create({
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  errorText: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});

export default recipeInfoStyles;
