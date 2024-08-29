import styled from "@emotion/styled";
import React from "react";
import WebApp from "@twa-dev/sdk";
import "@fontsource/roboto";
import { backgroundColor, textColor } from "./LayoutSettings";

export const Layout = ({ children }) => {
  const viewportStableHeight = WebApp.viewportStableHeight;
  return (
    <LayoutWrapper>
      <Content windowHeight={viewportStableHeight}>{children}</Content>
    </LayoutWrapper>
  );
};

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
  box-sizing: border-box;
  font-family: "Roboto";
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const Content = styled.div<{
  windowHeight: number;
}>`
  height: ${({ windowHeight }) => `${windowHeight}px`};
  overscroll-behavior: contain;
  overflow-y: scroll;
`;
