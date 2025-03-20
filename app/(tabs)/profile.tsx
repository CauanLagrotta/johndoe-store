import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/alanzoka.jpg")}
        style={styles.profilePic}
        resizeMode="cover"
      />
      <Text style={styles.name}>Cauanzada</Text>

      <View style={styles.infoContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.infoItems}
            activeOpacity={0.7}
          >
            <FontAwesome name={item.icon} size={24} color="#4A4A4A" />
            <Text style={styles.infoLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const menuItems: { icon: "user" | "shopping-cart" | "envelope" | "cog" | "sign-out"; label: string }[] = [
  { icon: "user", label: "Get profile data" },
  { icon: "shopping-cart", label: "My orders" },
  { icon: "envelope", label: "Contact us" },
  { icon: "cog", label: "Settings" },
  { icon: "sign-out", label: "Logout" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#3ab41b",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  infoContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  infoItems: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginLeft: 15,
  },
});
