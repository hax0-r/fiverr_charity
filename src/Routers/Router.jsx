import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Akaun_4 from "../Pages/Donation/akaun_4";

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
                path: "/donation/akaun-4",
                element: <Akaun_4 />
            },
        ]
    },
]);