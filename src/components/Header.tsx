import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { NavFunction } from "./NavFuntion";

const Header = () => {
  return (
    <Contianer>
      <Main>
        <LogoArea>
          <Icon>
            <AiOutlineMenu />
          </Icon>
          <Logo src={logo} />
        </LogoArea>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <SearchArea>
            <Input placeholder="Search" type="text" />

            <Div>
              <AiOutlineSearch size={25} />
            </Div>
          </SearchArea>
          <Icon bg="6">
            <BsFillMicFill />
          </Icon>
        </div>

        <CreateArea>
          <Icon>
            <AiOutlineVideoCameraAdd />
          </Icon>
          <Icon>
            <IoMdNotificationsOutline />
          </Icon>

          <Avatar>P</Avatar>
        </CreateArea>
      </Main>

      <Navigate>
        <NavFunction />
      </Navigate>
    </Contianer>
  );
};

export default Header;

const Navigate = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: start;
  margin-left: 100px;
  margin-top: 20px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkorange;
  color: white;
`;

const CreateArea = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  width: 60px;
  height: 100%;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  outline: none;
  padding-left: 10px;
  font-family: Poppins;
`;

const SearchArea = styled.div`
  width: 50%;
  height: 40px;
  /* background-color: silver; */
  border-radius: 100px;
  border: 1px solid silver;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.img`
  height: 35px;
`;

const Icon = styled.div<{ bg?: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  transition: all 350ms;
  margin: 0 5px;

  background-color: ${({ bg }) => (bg ? "#dddddd" : "transparent")};

  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
  }
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Contianer = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  position: fixed;
  z-index: 1;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 10px;
`;
