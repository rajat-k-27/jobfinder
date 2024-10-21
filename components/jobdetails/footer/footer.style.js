import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the button horizontally
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: 55, // Set consistent height
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.large, // Rounded corners
    marginLeft: SIZES.small, // Adjust margin for spacing between buttons
    paddingHorizontal: SIZES.xLarge, // Adjust padding for a larger button
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
});

export default styles;
