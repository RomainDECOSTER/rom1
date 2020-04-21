import React, { FunctionComponent, ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = (props) => (
  <>
    <Header />
    {props.children}
  </>
);
