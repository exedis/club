import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div``;

export const ProfileImage = styled.div<{ img: string }>`
  width: 100%;
  height: calc(100dvh - 140px);
  background-image: ${({ img }) => "url(" + img + ")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileImagesWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const SliderNextButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
`;

export const SliderPrevButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
`;

export const ProfilesTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  padding: 10px;
`;

export const ToolBarLink = styled(Link)`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e54738;
`;
