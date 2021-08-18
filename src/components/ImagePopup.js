import React from "react";

function ImagePopup() {
  return (
    <div className="popup" id="popup_foto_mesto">
      <div className="popup__container-foto">
        <figure className="popup__foto">
          <button
            className="popup__close"
            type="button"
            aria-label="Кнопка закрытия формы"
          ></button>
          <img className="popup__img" src="#" alt="#" />
          <figcaption className="popup__img-name"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
