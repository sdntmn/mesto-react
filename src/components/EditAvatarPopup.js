import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({isOpen, onClose}) {
 
  return (
   <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="avatar"
        title="Обновить аватар"
        btnName="Сохранить"
      >
        <input
          className="popup__input popup__input_value_avatar"
          id="avatar-input"
          placeholder="Ссылка на новый аватар"
          type="url"
          name="avatar"
          required
        />

        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>
  );
}