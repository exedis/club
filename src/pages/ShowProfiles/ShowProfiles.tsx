import { Profile } from "@components/Profile/Profile";
import { ProfileLikeBar } from "@components/ProfileLikeBar/ProfileLikeBar";
import React from "react";
import { MdManageAccounts } from "react-icons/md";
import { ShowProfilesTopbar } from "./ShowProfiles.styles";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Path } from "@consts/path";

export const ShowProfiles = () => {
  return (
    <>
      <ShowProfilesTopbar>
        <Link to={Path.TO_ACCOUNT}>
          <MdManageAccounts size={40} />
        </Link>
        <Link to={Path.TO_CHATS}>
          <IoChatbubbles size={40} />
        </Link>
      </ShowProfilesTopbar>
      <Profile />
      <ProfileLikeBar />
    </>
  );
};
