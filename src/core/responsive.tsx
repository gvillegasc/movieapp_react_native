import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const spR = (size: number) => {
  const value = ((width / 3) * size) / 100;
  return value;
};

const widthR = (percent: number) => {
  const value = (width * percent) / 100;
  return value;
};

const heightR = (percent: number) => {
  const value = (height * percent) / 100;
  return value;
};

const inchR = (percent: number) => {
  const inch = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  const value = (inch * percent) / 100;
  return value;
};

export default { spR, widthR, heightR, inchR };
