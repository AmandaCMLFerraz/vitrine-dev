import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 62,
    padding: 24,
    gap: 24,
  },
  scrollContent: {
    alignItems: "center",
    gap: 24, 
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  containerFollowers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  email: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  readmeContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  readmeText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
});
