import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Movielist from "./Components/Movielist/Movielist";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Movielist />
    </div>
  );
}

export default App;
