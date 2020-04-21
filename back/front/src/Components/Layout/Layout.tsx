import React, { FunctionComponent, ReactNode } from "react";
import { Header } from "./Header";
import { Container } from "semantic-ui-react";

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = (props) => (
  <>
    <Header />
    <Container>{props.children}</Container>
  </>
);
