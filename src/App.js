import React from "react";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { router } from "./utils/router";

function App() {
  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
