import React from "react";
import Card from "./Card";

function Main({
  cards,
  data,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleCardClick,
}) {
  return (
    <main className="content page__cover">
      <section className="profiles page__cover">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__data">
              <div className="profile__change-avatar">
                <img
                  className="profile__avatar "
                  src={data.avatar}
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
                  <h1 className="profile__item-info">{data.about}</h1>
                  <button
                    className="profile__opened"
                    type="button"
                    aria-label="Редактировать"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__specialization">{data.name}</p>
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
              data={data}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
