import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
