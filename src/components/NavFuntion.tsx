import styled from "styled-components";
import { useState, useEffect } from "react";
import { getVideos } from "../api/API";

export const NavFunction = () => {
  const [state, setState] = useState({});

  return (
    <NavHolder>
      <Navi col="d" onClick={() => {}}>
        All
      </Navi>
      <Navi
        onClick={() => {
          getVideos("News").then((res) => {
            console.log("Show Me...");
            localStorage.setItem("videos", JSON.stringify(res.News));
          });
        }}
      >
        News
      </Navi>
      <Navi
        onClick={() => {
          getVideos("Sport").then((res) => {
            localStorage.setItem("videos", JSON.stringify(res.Sport));
          });
        }}
      >
        Sport
      </Navi>
      <Navi
        onClick={() => {
          getVideos("War").then((res) => {
            localStorage.setItem("videos", JSON.stringify(res.War));
          });
        }}
      >
        War
      </Navi>
    </NavHolder>
  );
};

const NavHolder = styled.div`
  display: flex;
`;

const Navi = styled.div<{ col?: string }>`
  padding: 5px 15px;
  border-radius: 3px;
  background-color: ${({ col }) => (col ? "#f2f2f2" : "black")};
  color: ${({ col }) => (col ? "black" : "white")};
  margin: 0 5px;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
  }
`;
