import React from "react";

function Card() {
  return (
    <div id="template-element">
      <li className="element">
        <button
          className="element__trash"
          type="button"
          aria-label="Удалить"
        ></button>
        <img
          className="element__img"
          scr="https://w-dog.ru/wallpapers/3/0/309211117975565/kamni-mox-vodopad-derevya-les-sumerki.jpg"
          alt=""
        />
        <div className="element__title">
          <h2 className="element__name-mesto">22</h2>
          <div className="element__counting-likes">
            <button
              className="element__like"
              type="button"
              aria-label="Поставить лайк"
            ></button>
            <span className="element__number-likes">0</span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
