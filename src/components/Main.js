import Card from "./Card";
import React, { useContext } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  setCards,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        console.log(isLiked);
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
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
        setCards(cards.filter((card) => card._id !== card._id));
      })
      .catch((error) => {
        console.log(`Ошибка удаления карточки ${error}`);
      });
  }

  return (
    <main className="content page__cover">
      <section className="profiles page__cover">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__data">
              <div className="profile__change-avatar">
                <img
                  className="profile__avatar "
                  src={currentUser.avatar}
                  alt="Фото пользователя"
                />
                <button
                  className="profile__opened-avatar"
                  type="button"
                  aria-label="Редактировать аватар"
                  onClick={handleEditAvatarClick}
                ></button>
              </div>

              <div className="profile__item">
                <div className="profile__item-name">
                  <h1 className="profile__item-info">{currentUser.about}</h1>
                  <button
                    className="profile__opened"
                    type="button"
                    aria-label="Редактировать"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__specialization">{currentUser.name}</p>
              </div>
            </div>
            <button
              className="profile__button"
              type="button"
              aria-label="Добавить"
              onClick={handleAddPlaceClick}
            ></button>
          </div>
        </div>
      </section>

      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
