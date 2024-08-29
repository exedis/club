import React, { useState } from "react";
import {
  ProfileWrapper,
  ProfileImage,
  ProfileImagesWrapper,
  SliderNextButton,
  SliderPrevButton,
  ProfilesTopbar,
  ToolBarLink,
} from "./Profile.styles";
import { Path } from "@consts/path";
import { MdManageAccounts } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";

export const Profile = () => {
  const images = ["1.jpg", "3.jpg", "2.jpg"];
  const [activeSlide, setActiveSlide] = useState(0);
  const handleToNextSlide = () => {
    if (activeSlide < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleToPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <ProfileWrapper>
      <ProfilesTopbar>
        <ToolBarLink to={Path.TO_ACCOUNT}>
          <MdManageAccounts size={40} color="d3d3d3" />
        </ToolBarLink>
        <ToolBarLink to={Path.TO_CHATS}>
          <IoChatbubbles size={40} color="d3d3d3" />
        </ToolBarLink>
      </ProfilesTopbar>
      <ProfileImagesWrapper>
        <SliderNextButton onClick={handleToNextSlide} />
        <SliderPrevButton onClick={handleToPrevSlide} />
        {images.map((i, index) =>
          index === activeSlide ? <ProfileImage key={index} img={i} /> : null
        )}
      </ProfileImagesWrapper>
    </ProfileWrapper>
  );
};
