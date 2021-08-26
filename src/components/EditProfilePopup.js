import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({isOpen, onClose}) {
 
  return (
    <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="profile"
        title="Редактировать профиль"
        btnName="Сохранить"
      >
        <input
          className="popup__input popup__input_value_name"
          id="name-user"
          minLength="2"
          maxLength="40"
          placeholder="Введите ФИО"
          type="text"
          name="name"
          required
        />
        <span className="popup__input-error name-user-error"></span>
        <input
          className="popup__input popup__input_value_job"
          id="about-input"
          minLength="2"
          maxLength="200"
          placeholder="Введите специализацию"
          type="text"
          name="about"
          required
        />
        <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>
  );
}