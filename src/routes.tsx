import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import ChatRoom from "./pages/ChatRoom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
