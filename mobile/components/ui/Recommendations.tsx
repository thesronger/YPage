import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

interface Book {
  title: string;
  image: string;
}

interface RecommendationsProps {
  books: Book[];
}

const Recommendations: React.FC<RecommendationsProps> = ({ books }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Découvrez nos recommandations de la semaine</Text>
      <ScrollView horizontal>
        {books.map((book, index) => (
          <Image key={index} source={{ uri: book.image }} style={styles.bookImage} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#7E5D40",
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F4F4F4",
    marginBottom: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
});
