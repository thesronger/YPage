import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Book {
  title: string;
}

interface ReadingPileProps {
  books: Book[];
}

const ReadingPile: React.FC<ReadingPileProps> = ({ books }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Pile à Lire :</Text>
      <View style={styles.booksList}>
        {books.map((book, index) => (
          <Text key={index} style={styles.book}>{book.title}</Text>
        ))}
      </View>
    </View>
  );
};

export default ReadingPile;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#443429",
    marginBottom: 10,
  },
  booksList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  book: {
    backgroundColor: "#443429",
    color: "#F4F4F4",
    padding: 10,
    borderRadius: 10,
  },
});
