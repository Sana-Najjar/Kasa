import React from "react";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <li key={id} className="logements">
      <a href={"/logements/" + id}>
        <figure className="logements_figure">
          <img src={cover} alt={title} className="logements_figure_cover" />
          <figcaption className="logements_figure_figcaption">
            <h2 className="logements_figure_figcaption_title">{title}</h2>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

export default Card;