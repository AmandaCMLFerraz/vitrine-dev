import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 4,
  },
  language: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 6,
  },
  stats: {
    flexDirection: "row",
    marginTop: 10,
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});
