import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen/DetailScreen";
import { Movie } from "../../domain/interfaces/movieInterface";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
