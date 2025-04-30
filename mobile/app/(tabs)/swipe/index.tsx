import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface Book {
  title: string;
  image: string;
}

const booksData: Book[] = [
  {
    title: "Harry Potter et le prisonnier d'Azkaban",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
  },
  {
    title: "Harry Potter et la chambre des secrets",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
  },
  {
    title: "Harry Potter et le goblet de feu",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
  },
];

const SwipeBookScreen: React.FC = () => {
  const [cards, setCards] = useState<Book[]>(booksData);
  const swiperRef = useRef<any>(null);
  const router = useRouter();

  const handleSwiped = (index: number) => {
    // Carte swipée
  };

  const handleSwipedAll = () => {
    // recharge les cartes après un petit délai pour laisser Swiper finir ses animations
    setTimeout(() => {
      setCards(booksData);
    }, 500);
  };

  const noCards = cards.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Swiper affichant les livres */}
      <View style={styles.swiperContainer}>
        {cards.length > 0 ? (
          <Swiper
            ref={swiperRef}
            cards={cards}
            renderCard={(book: Book) => (
              <View style={styles.card}>
                <Image source={{ uri: book.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{book.title}</Text>
              </View>
            )}
            onSwiped={handleSwiped}
            onSwipedAll={handleSwipedAll}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={3}
            stackSeparation={15}
            animateCardOpacity={true}
          />
        ) : (
          <Text style={styles.noMoreText}>Plus de livres à swiper</Text>
        )}
      </View>

      {/* Boutons d’action */}
      <View style={styles.actionsRow} pointerEvents="box-none">
        <TouchableOpacity
          style={[styles.actionButton, noCards && styles.disabledButton]}
          onPressIn={() => swiperRef.current?.swipeBack()}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          disabled={noCards}
        >
          <Text style={styles.actionText}>↺</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, noCards && styles.disabledButton]}
          onPress={() => swiperRef.current?.swipeLeft()}
          disabled={noCards}
        >
          <Text style={styles.actionText}>✖</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, noCards && styles.disabledButton]}
          onPress={() => swiperRef.current?.swipeRight()}
          disabled={noCards}
        >
          <Text style={styles.actionText}>🔖</Text>
        </TouchableOpacity>
      </View>

      {/* Retour à la page principale */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Retour</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SwipeBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  swiperContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  card: {
    width: SCREEN_WIDTH * 0.85,
    backgroundColor: "#F4F4F4",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: SCREEN_WIDTH * 1.2,
    resizeMode: "cover",
  },
  cardTitle: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  noMoreText: {
    marginTop: 20,
    fontSize: 18,
    color: "#999999",
  },
  actionsRow: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 10,
    elevation: 10,
  },
  actionButton: {
    backgroundColor: "#D6C0A3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.3,
  },
  actionText: {
    fontSize: 24,
    color: "#443429",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    zIndex: 20,
    elevation: 20,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
  },
});
