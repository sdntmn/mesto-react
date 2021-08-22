import Card from "./Card";
import api from "../utils/api";
import { useEffect, useState } from "react";

function Main({
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleCardClick,
}) {
  //Синхронный вывод данных User и Card ====================================
  const [cards, setCards] = useState([]);
  const [dataUser, setUser] = useState({});

  useEffect(() => {
    api
      .renderFirstData()
      .then(([dataUser, cards]) => {
        setCards(cards);
        setUser(dataUser);
      })
      .catch((error) => {
        console.log(`Ошибка получения данных ${error}`);
      });
  }, []);

  return (
    <main className="content page__cover">
      <section className="profiles page__cover">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__data">
              <div className="profile__change-avatar">
                <img
                  className="profile__avatar "
                  src={dataUser.avatar}
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
                  <h1 className="profile__item-info">{dataUser.about}</h1>
                  <button
                    className="profile__opened"
                    type="button"
                    aria-label="Редактировать"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__specialization">{dataUser.name}</p>
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
              data={dataUser}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
