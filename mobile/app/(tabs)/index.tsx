import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const recommendedBooks = [
  { title: "Harry Potter 1", image: "https://example.com/hp1.jpg", rating: "3/5" },
  { title: "Harry Potter 2", image: "https://example.com/hp2.jpg", rating: "4/5" },
  { title: "Harry Potter 3", image: "https://example.com/hp3.jpg", rating: "5/5" },
];

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Livres");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "Livres" && styles.activeTab]} 
            onPress={() => setActiveTab("Livres")}
          >
            <Text style={[styles.tabText, activeTab === "Livres" && styles.activeTabText]}>Livres</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "BD" && styles.activeTab]} 
            onPress={() => setActiveTab("BD")}
          >
            <Text style={[styles.tabText, activeTab === "BD" && styles.activeTabText]}>BD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.highlightContainer}>
          <Text style={styles.highlightText}>Livre à la une</Text>
        </View>
        <Section title="Recommandations de la semaine pour vous" books={recommendedBooks} />
        <Section title="Les nouveautés les plus populaires" books={recommendedBooks} />
        <Section title="TOP 2024" books={recommendedBooks} />
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const Section: React.FC<{ title: string, books: any[] }> = ({ title, books }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity><Text>⏩</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {books.map((book, index) => (
          <View key={index} style={styles.bookCard}>
            <Image source={{ uri: book.image }} style={styles.bookImage} />
            <Text style={styles.bookRating}>{book.rating}</Text>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const BottomNav: React.FC = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🏠</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🔍</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItemActive}><Text style={styles.navIconActive}>📖</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🔖</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>👤</Text></TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" },
  tabsContainer: { flexDirection: "row", justifyContent: "center", padding: 10 },
  tab: { backgroundColor: "#E0E0E0", padding: 10, borderRadius: 20, marginHorizontal: 5, minWidth: 100, alignItems: "center" },
  activeTab: { backgroundColor: "#C4C4C4" },
  tabText: { color: "black", fontWeight: "bold" },
  activeTabText: { fontWeight: "bold" },
  highlightContainer: { backgroundColor: "#C4C4C4", height: 100, justifyContent: "center", alignItems: "center" },
  highlightText: { fontSize: 18, fontWeight: "bold" },
  section: { marginTop: 20, paddingHorizontal: 10 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  bookCard: { width: 120, alignItems: "center", marginRight: 10 },
  bookImage: { width: 100, height: 150, borderRadius: 10, backgroundColor: "#DDD" },
  bookRating: { backgroundColor: "#443429", color: "#F4F4F4", padding: 5, borderRadius: 5, marginTop: 5 },
  bookTitle: { marginTop: 5, textAlign: "center" },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#DDD", position: "absolute", bottom: 0, width: "100%" },
  navItem: { alignItems: "center", padding: 10 },
  navItemActive: { alignItems: "center", backgroundColor: "black", padding: 10, borderRadius: 50 },
  navIcon: { fontSize: 20, color: "black" },
  navIconActive: { fontSize: 20, color: "white" },
});
