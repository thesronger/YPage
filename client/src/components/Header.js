import React, { Component } from "react";
import "../styles/Header.css";
import "../styles/Theme.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>YPage</h1>
        <div className="search-container">
          <input type="text" placeholder="Rechercher" />
          <button>🔍</button>
        </div>
        <nav className="nav-buttons">
          <button>Accueil</button>
          <button>Actualité</button>
          <button>Meilleures ventes</button>
          <button>Livres 2024</button>
          <button>Tops</button>
        </nav>
        <div className="icons">
          <span role="img" aria-label="books">📚</span>
          <span role="img" aria-label="profile">👤</span>
        </div>
      </header>
    );
  }
}

export default Header;
