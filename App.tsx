import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Details from "./src/Details";
import Home from "./src/Home";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const option = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={option} />
        <Screen name="RAW JSON" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
