import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/ui/Header";
import Recommendations from "../../components/ui/Recommendations";
import ReadingPile from "../../components/ui/ReadingPile";

const recommendedBooks = [
  { title: "Harry Potter 1", image: "https://example.com/hp1.jpg" },
  { title: "Harry Potter 2", image: "https://example.com/hp2.jpg" },
  { title: "Harry Potter 3", image: "https://example.com/hp3.jpg" },
];

const readingPile = [
  { title: "Livre 1" },
  { title: "Livre 2" },
  { title: "Livre 3" },
  { title: "Livre 4" },
];

const HomePage: React.FC = () => {
  return (
    <ScrollView>
      <Header />
      <Recommendations books={recommendedBooks} />
      <ReadingPile books={readingPile} />
    </ScrollView>
  );
};

export default HomePage;

