import React from "react";
import {
  BeginSettingsForm,
  BeginSettingsImages,
  BeginSettingsImagesItem,
} from "./BeginSettings.styles";
import WebApp from "@twa-dev/sdk";

export const BeginSettings = () => {
  const { first_name, last_name, username, photo_url } =
    WebApp.initDataUnsafe.user;
  return (
    <div>
      <p>Перед использованием нужно заполнить поля</p>
      <BeginSettingsForm>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={`${first_name}, ${last_name}, ${username}`}
          required
        />
        <input type="text" name="age" placeholder="Дата рождения" />
        <input type="text" name="aim" placeholder="Цель знакомства" />
        <input type="text" name="aim" placeholder="Ваш город" required />
        <input type="text" name="description" placeholder="Немного о себе" />
        <p>{photo_url}</p>
        <p>Фото из вашего профиля в ТГ</p>
        <BeginSettingsImages>
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
          <BeginSettingsImagesItem />
        </BeginSettingsImages>
      </BeginSettingsForm>
    </div>
  );
};
