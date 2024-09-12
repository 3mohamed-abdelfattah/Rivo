import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, DashBoard, LoginPage, NotFoundPage, SignUpPage, ShopPage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign_up",
        element: <SignUpPage />,
    },
    {
        path: "/seller_dashboard",
        element: <DashBoard />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;