import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";
import { Link } from "expo-router";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  return (
    <>
      <Link href={`/product/${data.id}`} asChild>
        <Pressable style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: data.image }}
            resizeMode="cover"
          />

          <View style={styles.info}>
            <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.description}>{data.description}</Text>

            <Text style={styles.price}>
              {data.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </Pressable>
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
});
