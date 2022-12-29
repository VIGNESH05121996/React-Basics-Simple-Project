import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloWorld from "./components/hello-world/helloWorld";
import Counter from "./components/counter/counter";
import { TemperatureControl } from "./components/temperature control/temperatureControl";
import SearchFilter from "./components/search-filter/searchFilter";
import Registration from "./components/registration-form/registration";
import { Component } from "react";
import { Home } from "./home";

export default class ProjectRoute extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/temperatureControl" element={<TemperatureControl />} />
          <Route path="/searchFilter" element={<SearchFilter />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    );
  }
}
