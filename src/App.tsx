import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import TypePage from "./pages/TypePage";
import AboutUsPage from "./pages/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/pokemon/:id",
        element: <DetailPage />,
      },
      {
        path: "/type",
        element: <TypePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
