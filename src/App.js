import React, {useEffect, useState} from "react";
import GlobalRouter from "./routes/GlobalRouter";
import {BookshopContext} from "./context/BookshopContext";

function App() {

  return (
    <BookshopContext.Provider value={{}}>
      <GlobalRouter></GlobalRouter>
    </BookshopContext.Provider>
  );
}

export default App;
