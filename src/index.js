import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";
import Skills from "./components/Skills";
import Assistant from "./components/Assistant";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/skills",
        element: <Skills />,
    },
    {
        path: "/assistant",
        element: <Assistant />,
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));
