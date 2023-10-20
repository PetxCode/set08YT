import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineVideoLibrary,
  MdSubscriptions,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import styled from "styled-components";

interface iProp {
  icon: any;
  text: string;
}

const Nav: React.FC<iProp> = ({ icon, text }) => {
  return (
    <Holder>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Holder>
  );
};

const Sider = () => {
  return (
    <Contianer>
      <br />
      <br />
      <br />
      <Nav icon={<AiFillHome />} text="Home" />
      <Nav icon={<MdOutlineScreenshotMonitor />} text="Shorts" />
      <Nav icon={<MdSubscriptions />} text="Subscriptions" />
      <Nav icon={<MdOutlineVideoLibrary />} text="Library" />
    </Contianer>
  );
};

export default Sider;

const Text = styled.div`
  font-size: 10px;
  font-weight: normal;
`;

const Icon = styled.div`
  font-size: 30px;
  line-height: 1;
`;

const Holder = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 350ms;
  border-radius: 5px;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #dedcdc;
  }
`;

const Contianer = styled.div`
  margin-top: 100px;
  width: 100px;
  height: calc(100vh - 52px);
  border-bottom: 1px solid silver;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
