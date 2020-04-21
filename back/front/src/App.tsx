import React from "react";
import { Layout } from "./Components/Layout";
import { Route } from "react-router-dom";
import { Home } from "./Scenes/Home/Home";
import { LoginPage } from "./Scenes/Login/Login";

interface Props {}

export const App: React.FunctionComponent<Props> = (props) => (
  <>
    <Layout>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={LoginPage} />
    </Layout>
  </>
);
