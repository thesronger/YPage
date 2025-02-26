import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Recommendations from "./components/Recommendations";
import ReadingPile from "./components/ReadingPile";
import "./styles/Theme.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedBooks: [
        { title: "Harry Potter 1", image: "hp1.jpg" },
        { title: "Harry Potter 2", image: "hp2.jpg" },
        { title: "Harry Potter 3", image: "hp3.jpg" },
      ],
      readingPile: [
        { title: "Livre 1" },
        { title: "Livre 2" },
        { title: "Livre 3" },
        { title: "Livre 4" },
      ],
    };
  }

  render() {
    return (
      <div className="homepage">
        <Header />
        <Recommendations books={this.state.recommendedBooks} />
        <section className="news">
          <h2>Accueil</h2>
          <div className="news-items">
            <div className="news-item">Actu</div>
            <div className="news-item">Actu</div>
            <div className="news-item">Actu</div>
          </div>
        </section>
        <ReadingPile books={this.state.readingPile} />
      </div>
    );
  }
}

export default HomePage;
