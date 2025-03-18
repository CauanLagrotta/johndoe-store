import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
  const handleStart = () => {
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />

      <Text style={styles.h1}>John Doe Store</Text>
      <Text style={styles.h2}> Your favorite store </Text>

      <Button title="Start Shopping" onPress={handleStart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 18,
    color: "#666",
  },
});
