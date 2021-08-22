import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  // Первоначальное состояние попапа Profile (False - закрыт)===============
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // Обработчик состояние попапа Profile (Меняем на True)===================
  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  // Первоначальное состояние попапа Place (False - закрыт)=================
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  // Обработчик состояние попапа Place (Меняем на True)=====================
  const onAddPlace = () => {
    setPlacePopupOpen(true);
  };
  // Первоначальное состояние попапа Avatar (False - закрыт)================
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  // Обработчик состояние попапа Avatar (Меняем на True)====================
  const onEditAvatar = () => {
    setAvatarPopupOpen(true);
  };

  // Первоначальное состояние попапа Foto (Null)============================
  const [selectedCard, setSelectedCard] = useState(null);
  // Обработчик состояние попапа Foto (Меняем на полученный props)==========
  const onCardClick = (card) => {
    setSelectedCard(card);
  };

  // Закрытие попапа (смена состояния на - False или Null)==================
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        handleEditProfileClick={onEditProfile}
        handleAddPlaceClick={onAddPlace}
        handleEditAvatarClick={onEditAvatar}
        handleCardClick={onCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
    </div>
  );
}

export default App;
