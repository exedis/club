import styled from "@emotion/styled";

export const BeginSettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BeginSettingsImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: space-between;
`;

export const BeginSettingsImagesItem = styled.div`
  width: 130px;
  height: 220px;
  border: 1px solid gray;
  border-radius: 4px;
`;

export const BeginSettingsInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  font-size: 16px;
  font-family: "Roboto";
`;
