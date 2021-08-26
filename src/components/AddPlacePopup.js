import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose}) {
 
  return (
    <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="mesto"
        title="Новое место"
        btnName="Создать"
      >
        <input
          className="popup__input popup__input_value_mesto"
          id="name-input"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          type="text"
          name="place"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          className="popup__input popup__input_value_link"
          id="link-input"
          placeholder="Ссылка на картинку"
          type="url"
          name="link"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>
  );
}