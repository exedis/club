import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { LikeBarWrapper } from "./ProfileLikeBar.styled";

export const ProfileLikeBar = () => {
  return (
    <LikeBarWrapper>
      <div>
        <MdOutlineCancel color="brown" size="60px" />
      </div>
      <div>
        <FaHeart color="red" size="60px" />
      </div>
    </LikeBarWrapper>
  );
};
