import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Donor from "../Pages/Donor";
import Groceries from "../Pages/Categories/Groceries";
import Education from "../Pages/Categories/Education";
import Health from "../Pages/Categories/Health";

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
                path: "/groceries",
                element: <Groceries />
            },
            {
                path: "/education",
                element: <Education />
            },
            {
                path: "/health",
                element: <Health />
            },
        ]
    },
]);