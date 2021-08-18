import React from "react";
import avatarPath from "../images/image.jpg";
import Card from "./Card";

function Main() {
  function handleEditProfileClick() {
    const btnProfile = document.querySelector(".profile__opened");
    btnProfile.classList.add("popup_is-opened");
  }

  function handleAddPlaceClick() {
    console.log(123);
  }
  return (
    <main className="content page__cover">
      <section className="profiles page__cover">
        <div className="profile">
          <div className="profile__info">
            <div className="profile__data">
              <div className="profile__change-avatar">
                <img
                  className="profile__avatar popup_is-opened"
                  src={avatarPath}
                  alt="Фото пользователя"
                />
                <button
                  className="profile__opened-avatar"
                  type="button"
                  aria-label="Редактировать аватар"
                ></button>
              </div>

              <div className="profile__item">
                <div className="profile__item-name">
                  <h1 className="profile__item-info">Жак-Ив Кусто</h1>
                  <button
                    className="profile__opened"
                    type="button"
                    aria-label="Редактировать"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__specialization">Исследователь океана</p>
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
          <Card />
        </ul>
      </section>
    </main>
  );
}

export default Main;
