import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>YPage</Text>
      <TextInput style={styles.searchInput} placeholder="Rechercher" />
      <View style={styles.icons}>
        <Text style={styles.icon}>📚</Text>
        <Text style={styles.icon}>👤</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#7E5D40",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F4F4F4",
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 35,
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 20,
    color: "#F4F4F4",
  },
});
