import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate()
  const goToLogementPage = (id) => {
    navigate(`/logements/${id}`)
  }
  return (
    <li className="logements" onClick={()=> goToLogementPage(id)}>
       <figure className="logements_figure">
          <img src={cover} alt={title} className="logements_figure_cover" />
          <figcaption className="logements_figure_figcaption">
            <h2 className="logements_figure_figcaption_title">{title}</h2>
          </figcaption>
        </figure>
     
    </li>
  );
};

export default Card;