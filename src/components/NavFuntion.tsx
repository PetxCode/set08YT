import styled from "styled-components";
import { getVideos } from "../api/API";

export const NavFunction = () => {
  return (
    <NavHolder>
      <Navi
        col="d"
        onClick={() => {
          getVideos("All");
        }}
      >
        All
      </Navi>
      <Navi
        onClick={() => {
          getVideos("News");
        }}
      >
        News
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
