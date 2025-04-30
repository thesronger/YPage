import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const recommendedBooks = [
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    rating: "5/5",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    rating: "5/5",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    rating: "5/5",
  },
];


const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Livres");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Top Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Livres" && styles.activeTab]}
            onPress={() => setActiveTab("Livres")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Livres" && styles.activeTabText,
              ]}
            >
              Livres
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "BD" && styles.activeTab]}
            onPress={() => setActiveTab("BD")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "BD" && styles.activeTabText,
              ]}
            >
              BD
            </Text>
          </TouchableOpacity>
        </View>

        {/* Highlight */}
        <View style={styles.highlightContainer}>
          <Text style={styles.highlightText}>Livre à la une</Text>
        </View>

        {/* Sections */}
        <Section
          title="Recommandations de la semaine pour vous"
          books={recommendedBooks}
        />
        <Section
          title="Les nouveautés les plus populaires"
          books={recommendedBooks}
        />
        <Section title="TOP 2024" books={recommendedBooks} />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav onSwipePress={() => router.push("/swipe")} />
    </View>
  );
};

const Section: React.FC<{ title: string; books: any[] }> = ({
  title,
  books,
}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text>⏩</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal>
      {books.map((book, i) => (
        <View key={i} style={styles.bookCard}>
          <Image source={{ uri: book.image }} style={styles.bookImage} />
          <Text style={styles.bookRating}>{book.rating}</Text>
          <Text style={styles.bookTitle}>{book.title}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

interface BottomNavProps {
  onSwipePress: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onSwipePress }) => (
  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>🏠</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>🔍</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navItemActive}
      onPress={onSwipePress}
    >
      <Text style={styles.navIconActive}>📖</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>🔖</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>👤</Text>
    </TouchableOpacity>
  </View>
);

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  tab: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    minWidth: 100,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#C4C4C4",
  },
  tabText: {
    color: "black",
    fontWeight: "bold",
  },
  activeTabText: {
    fontWeight: "bold",
  },
  highlightContainer: {
    backgroundColor: "#C4C4C4",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookCard: {
    width: 120,
    alignItems: "center",
    marginRight: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#DDD",
  },
  bookRating: {
    backgroundColor: "#443429",
    color: "#F4F4F4",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  bookTitle: {
    marginTop: 5,
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 10,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    padding: 10,
  },
  navItemActive: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
  },
  navIcon: {
    fontSize: 20,
    color: "black",
  },
  navIconActive: {
    fontSize: 20,
    color: "white",
  },
});
