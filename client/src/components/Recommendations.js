import React, { Component } from "react";
import "../styles/Theme.css";

class Recommendations extends Component {
  render() {
    return (
      <section className="recommendations">
        <h2>Découvrez nos recommandations de la semaine</h2>
        <div className="books-carousel">
          {this.props.books.map((book, index) => (
            <img key={index} src={book.image} alt={book.title} />
          ))}
          <button className="next">▶</button>
        </div>
      </section>
    );
  }
}

export default Recommendations;
