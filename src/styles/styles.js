import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  top: {
    height: 99,
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: "#e73e33",
  },
  topTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  cardContainer: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#d5d5d5",
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 26,
    marginBottom: 30,
    textAlign: "center",
    color: "#3333",
  },
  headerInput: {
    backgroundColor: "#ffff",
    borderRadius: '10px',
    paddingLeft: '10px'
  },
  pokemonBox: { alignItems: "center" },
  pokemonName: { fontSize: 22, textTransform: "capitalize" },
  pokemonWeight: { fontSize: 18 },
  pokemonImg: { width: 150, height: 150 },
});
