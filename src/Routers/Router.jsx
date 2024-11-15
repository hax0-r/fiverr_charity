import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Donor from "../Pages/Donor";
import Categories from "../Pages/Categories/Categories";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/donor",
                element: <Donor />
            },
            {
                path: "/categories",
                element: <Categories />
            },
        ]
    },
]);