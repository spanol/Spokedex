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
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: "#e73e33",
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "black"
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 26,
    marginBottom: 30,
    textAlign: "center",
    color: "#3333",
  },
  pokedexContainer:{
    backgroundColor: "#e73e33",
  },
  infosContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    margin: '20px',
  },
  infos:{
    display: "flex",
    width: '175px',
    height: '50px',
    backgroundColor: '#232323',
    border: '2px solid #000000',
    fontSize: '28px',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingLeft: '5px',
  },
  typeContainer: {
    backgroundColor: "white",
    // display: "flex",
    // flexDirection: "row",
    // width: '85px',
    // height: "50px",
    // backgroundColor: "white",
    // border: "2px solid #000000",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  typeImage: {
    width: "48px",
    height: "16px"
  },
  headerInput: {
    backgroundColor: "#ffff",
    borderRadius: '2px',
    height: '50px',
    paddingLeft: '10px'
  },
  test: {
    backgroundColor: "#52af5f",
    border: "1px solid #000000",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
    textTransform: "capitalize",
    boxShadow: "inset 1px 1px #306938, inset 2px 2px #000000",
  },
  appBackground:{
    backgroundColor: "#e73e33",
  },
  appImage:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ea1e11",
    height: "30px",
  },
  pokemonBox: { alignItems: "center" },
  pokemonName: { fontSize: '40px', textTransform: "capitalize"},
  pokemonWeight: { fontSize: 18 },
  pokemonImg: { width: 150, height: 150 },
});
