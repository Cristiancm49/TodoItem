import React from "react";

import { AppUi } from "./AppUi.js";
import { TodoProvider } from "../components/TodoContext/TodoContext.js";

function App() {
 
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>

  );
}

export default App;
