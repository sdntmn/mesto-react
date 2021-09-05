import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

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

  //Синхронный вывод данных User и Card ====================================
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .renderFirstData()
      .then(([currentUser, cards]) => {
        setCards(cards);
        setCurrentUser(currentUser);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, []);

  // Закрытие попапа (смена состояния на - False или Null)==================
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  // Исправление(смена) данных пользователя=================================
  function handleUpdateUser(data) {
    api
      .changeDataUser(data)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }

  // Смена аватара пользователя=============================================
  function handleUpdateAvatar(data) {
    api
      .changeAvatarUser(data)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка данных ${error}`);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((error) => {
        console.log(`Ошибка данных лайков ${error}`);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCardUser(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch((error) => {
        console.log(`Ошибка удаления карточки ${error}`);
      });
  }

  function handleAddPlaceSubmit(userCard) {
    api
      .setCardUser(userCard)
      .then((newArrCard) => {
        setCards([newArrCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка данных карточки ${error}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          setCards={setCards}
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
          handleCardClick={onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdateCard={handleAddPlaceSubmit}
        ></AddPlacePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>
        <PopupWithForm
          onClose={closeAllPopups}
          name="delete_card"
          title="Вы уверены?"
          btnName="Да"
        ></PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
