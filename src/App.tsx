import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Client from "./pages/client";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/client", element: <Client /> },
]);

export { router };
