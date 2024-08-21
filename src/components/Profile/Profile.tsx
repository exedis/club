import React, { useState } from "react";
import {
  ProfileWrapper,
  ProfileDescription,
  ProfileImage,
  ProfileImagesWrapper,
  ProfileName,
  ProfileShortData,
  //   ShowProfileInfoButton,
  SliderNextButton,
  SliderPrevButton,
} from "./Profile.styles";

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

  //   const handleToProfileInfo = () => {
  //   };

  return (
    <ProfileWrapper>
      <ProfileImagesWrapper>
        <SliderNextButton onClick={handleToNextSlide} />
        <SliderPrevButton onClick={handleToPrevSlide} />
        {/* <ShowProfileInfoButton
          onClick={() => {
            console.log("sdsds");
          }}
        /> */}
        {images.map((i, index) =>
          index === activeSlide ? <ProfileImage key={index} img={i} /> : null
        )}
      </ProfileImagesWrapper>
      <ProfileShortData>
        <ProfileName>Имя, возраст</ProfileName>
        <div>Инфа на одну строку</div>
      </ProfileShortData>

      <ProfileDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        placeat. Repellendus, corporis quas illo, accusamus rerum praesentium
        deleniti excepturi dolor illum voluptatum laborum adipisci molestiae
        alias reprehenderit pariatur animi consectetur!
      </ProfileDescription>
    </ProfileWrapper>
  );
};
