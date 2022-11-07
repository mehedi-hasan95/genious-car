import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Home/service/ServiceDetails";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter ([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'home', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: 'services/:id', element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://genious-car-server-phi.vercel.app/services/${params.id}`)
    },
        {path: 'checkout/:id', element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
        loader: ({params}) => fetch(`https://genious-car-server-phi.vercel.app/services/${params.id}`)
    },
    {path: 'orders', element: <PrivetRoute><Orders></Orders></PrivetRoute>},
    {path: '*', element: <Error></Error>}
    ]
}
])