import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/details/:id",
        element: <Details />
    }
])