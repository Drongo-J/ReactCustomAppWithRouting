import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <a onClick={() => navigate(-1)} className="back"></a> */}
      <a href='/home' className='back'>
        Go back
      </a>

      <section>
        <h1>About</h1>
      </section>

      <section>
        <p className="page">
          Welcome to Cocktail, your ultimate destination for all things related
          to cocktails, mixology, and the art of crafting delightful drinks. At
          Cocktail, we're passionate about exploring the world of cocktails,
          from classic recipes to innovative creations, and we're here to share
          our knowledge and enthusiasm with you. Our mission at Cocktail is
          simple: to elevate your cocktail experience. Whether you're a seasoned
          mixologist or someone who's just starting to explore the world of
          cocktails, we're here to inspire and educate. We believe that a
          well-crafted cocktail is more than just a drink; it's a work of art
          that brings people together, sparks conversations, and creates
          unforgettable moments.
        </p>
      </section>
    </div>
  );
}
