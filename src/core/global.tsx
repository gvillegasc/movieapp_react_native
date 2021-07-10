import { StyleSheet } from "react-native";
import responsive from "./responsive";

export const globalStyles = StyleSheet.create({
  textSubtitleMedium: {
    fontSize: responsive.spR(15),
    fontWeight: "bold",
    color: "black",
  },
  textSubtitleSmall: {
    fontSize: responsive.spR(12),
    fontWeight: "bold",
    color: "black",
  },
  textParagraphMedium: {
    fontSize: responsive.spR(11),
    color: "black",
  },
  textParagraphSmall: {
    fontSize: responsive.spR(10),
    color: "black",
  },
});
