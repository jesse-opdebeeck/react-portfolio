import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
