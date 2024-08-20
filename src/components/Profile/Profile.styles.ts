import styled from "@emotion/styled";

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div`
  height: 110%;
`;

export const ProfileImage = styled.div<{ img: string }>`
  width: 100%;
  height: calc(100dvh - 140px);
  background-image: ${({ img }) => "url(" + img + ")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileImagesWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ProfileName = styled.div``;

export const ProfileShortData = styled.div`
  backdrop-filter: blur(6px);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(108 104 104 / 28%) 100%
  );
  color: #fff;
  font-size: 18px;
  margin-top: -60px;
  position: relative;
  z-index: 9;
  padding: 10px;
  border-radius: 0 0 10px 10px;
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

// export const ShowProfileInfoButton = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 15%;
//   width: 100%;
// `;

export const ProfileDescription = styled.div`
  margin: 10px 10px 0;
`;
