import React, { Component } from "react";
import "../styles/Theme.css";

class ReadingPile extends Component {
  render() {
    return (
      <section className="reading-pile">
        <h2>Ma Pile à Lire :</h2>
        <div className="books-list">
          {this.props.books.map((book, index) => (
            <div key={index} className="book">{book.title}</div>
          ))}
        </div>
        <button className="view-more">Voir ma pile</button>
      </section>
    );
  }
}

export default ReadingPile;
