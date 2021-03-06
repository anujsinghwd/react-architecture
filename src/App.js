import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { CounterButton } from "./components/CounterButton";
import { CounterProvider } from "./Provider/CounterProvider";

const GreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`;

const App = () => {
  return (
    <CounterProvider>
      <GreenHeading>Server-Side Rendering Example</GreenHeading>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <div>
        <CounterButton />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </CounterProvider>
  );
};

export default App;
