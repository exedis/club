import React from "react";
import {
  BeginSettingsForm,
  BeginSettingsImages,
  BeginSettingsImagesItem,
  BeginSettingsInput,
} from "./BeginSettings.styles";
// import WebApp from "@twa-dev/sdk";

const CITY = [
  { uuid: "qweqwe", title: "Москва" },
  { uuid: "qweqwe22", title: "СПБ" },
];
export const BeginSettings = () => {
  //   const { first_name, last_name, username, photo_url } =
  //     WebApp.initDataUnsafe.user;
  return (
    <div>
      <p>Перед использованием нужно заполнить поля</p>
      <BeginSettingsForm>
        <BeginSettingsInput
          type="text"
          name="name"
          placeholder="Имя"
          //   value={`${first_name}, ${last_name}, ${username}`}
          required
        />
        <BeginSettingsInput
          type="text"
          name="age"
          placeholder="Дата рождения"
        />
        <BeginSettingsInput
          type="text"
          name="aim"
          placeholder="Цель знакомства"
        />
        <select name="city">
          <option>Выберите ваш город</option>
          {CITY.map((i) => (
            <option key={i.uuid} value={i.uuid}>
              {i.title}
            </option>
          ))}
        </select>
        <BeginSettingsInput
          type="text"
          name="description"
          placeholder="Немного о себе"
        />
        {/* <p>{photo_url}</p> */}
        <p>Фото из вашего профиля в ТГ</p>
        <BeginSettingsImages>
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
        </BeginSettingsImages>
        <button>Готово</button>
      </BeginSettingsForm>
    </div>
  );
};
