import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";

function App() {
  return (
    <div className="page" id="root">
      <Header />
      <Main></Main>
      <Footer />
      <ImagePopup />

      <div className="popup" id="popup_form_profile">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_profile"
            id="form_profile"
            name="formProfile"
            novalidate
          >
            <button
              className="popup__close"
              type="button"
              aria-label="Кнопка закрытия формы"
            ></button>
            <fieldset className="popup__data">
              <legend className="popup__title">Редактировать профиль</legend>
              <input
                className="popup__input popup__input_value_name"
                id="name-user"
                minlength="2"
                maxlength="40"
                placeholder="Введите ФИО"
                type="text"
                name="name"
                required
              />
              <span className="popup__input-error name-user-error"></span>
              <input
                className="popup__input popup__input_value_job"
                id="about-input"
                minlength="2"
                maxlength="200"
                placeholder="Введите специализацию"
                type="text"
                name="about"
                required
              />
              <span className="popup__input-error about-input-error"></span>
            </fieldset>
            <button
              type="submit"
              className="popup__button"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup_form_mesto">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_profile"
            id="form_mesto"
            name="formMesto"
            novalidate
          >
            <button
              className="popup__close"
              type="button"
              aria-label="Кнопка закрытия формы"
            ></button>
            <fieldset className="popup__data">
              <legend className="popup__title">Новое место</legend>
              <input
                className="popup__input popup__input_value_mesto"
                id="name-input"
                minlength="2"
                maxlength="30"
                placeholder="Название"
                type="text"
                name="name"
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
            </fieldset>
            <button
              type="submit"
              className="popup__button"
              aria-label="Создать"
              disabled
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup_form_avatar">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_avatar"
            id="form_avatar"
            name="formAvatar"
            novalidate
          >
            <button
              className="popup__close"
              type="button"
              aria-label="Кнопка закрытия формы аватар"
            ></button>
            <fieldset className="popup__data">
              <legend className="popup__title">Обновить аватар</legend>
              <input
                className="popup__input popup__input_value_avatar"
                id="avatar-input"
                placeholder="Ссылка на новый аватар"
                type="url"
                name="avatar"
                required
              />
              <span className="popup__input-error avatar-input-error"></span>
            </fieldset>
            <button
              type="submit"
              className="popup__button"
              aria-label="Сохранить"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup" id="popup_delete_card">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_delete-card"
            id="form_delete_card"
            name="formDeleteCard"
            novalidate
          >
            <button
              className="popup__close"
              type="button"
              aria-label="Кнопка закрытия формы"
            ></button>
            <fieldset className="popup__data">
              <legend className="popup__title">Вы уверены?</legend>
            </fieldset>
            <button type="submit" className="popup__button" aria-label="Да">
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
