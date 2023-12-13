
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
           {
            path:"/",
            element:<Home></Home>
           },
           {
            path:"/about",
            element:<About></About>
           },
        ]
    }
])
export default router;