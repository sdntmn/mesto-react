import React from "react";

function Card({ card, data, onCardClick }) {
  const userId = data._id;
  const isOwnerId = userId === card._id;

  return (
    <li className="element">
      <button
        className={`element__trash ${isOwnerId ? "element_is-visible" : ""}`}
        type="button"
        aria-label="Удалить"
      ></button>
      <img
        className="element__img"
        src={card.link}
        alt={card.name}
        onClick={(_) => onCardClick(card)}
      />
      <div className="element__title">
        <h2 className="element__name-mesto">{card.name}</h2>
        <div className="element__counting-likes">
          <button
            className="element__like"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="element__number-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
