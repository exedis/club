import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import {
  ControlBar,
  ProfileDataBarWrapper,
  ProfileDescription,
  ProfileName,
  ProfileShortData,
} from "./ProfileDataBar.styled";
import WebApp from "@twa-dev/sdk";

export const ProfileDataBar = () => {
  const handleOnLike = () => {
    WebApp.showAlert("ЛАЙК");
  };

  const handleOnDislike = () => {
    WebApp.showAlert("А шо не так?!");
  };

  return (
    <ProfileDataBarWrapper>
      <ProfileShortData>
        <ProfileName>Имя, возраст</ProfileName>
        <div>Инфа на одну строку</div>
      </ProfileShortData>

      <ControlBar>
        <MdOutlineCancel
          color="#d3d3d3"
          size="40px"
          onClick={handleOnDislike}
        />
        <FaHeart color="#e54738" size="40px" onClick={handleOnLike} />
      </ControlBar>

      <ProfileDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        placeat. Repellendus, corporis quas illo, accusamus rerum praesentium
        deleniti excepturi dolor illum voluptatum laborum adipisci molestiae
        alias reprehenderit pariatur animi consectetur!
      </ProfileDescription>
    </ProfileDataBarWrapper>
  );
};
