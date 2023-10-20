import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sider from "./Sider";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Sider />

        <Holder>
          <Div>
            <Outlet />
          </Div>
        </Holder>
      </Main>
    </Container>
  );
};

export default Layout;

const Div = styled.div`
  width: calc(100% - 101px);
`;

const Holder = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: end;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
`;
const Container = styled.div``;
