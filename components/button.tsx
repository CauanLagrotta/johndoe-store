import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#164e85",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
