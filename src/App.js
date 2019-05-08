import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/projects";
import Blog from "./components/blog";
import NotFound from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/skills" component={Skills} />
        <Route path="/projecten" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
