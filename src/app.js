import { Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Postlist from "./components/postlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

const app = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Postlist />
        </Route>
      </Switch>
    </Router>
  );
};

export default app;
