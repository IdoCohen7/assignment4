import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF5E1",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  recipeCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F1C27D",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    width: "90%",
    marginTop: 20,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 16,
    color: "#555",
  },
  addButton: {
    marginTop: 30,
    backgroundColor: "#F1C27D",
    paddingVertical: 8,
    width: "80%",
    borderRadius: 8,
  },
});

export default styles;
