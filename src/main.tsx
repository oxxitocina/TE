import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/App.css";
import "./setup/config/i18n/i18n";
import { ThemeProvider } from "./setup/providers/ThemeProvider/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./setup/consts/routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: Routes.MAIN.path,
        element: Routes.MAIN.element,
      },
      {
        path: Routes.HANDBOOK.path,
        element: Routes.HANDBOOK.element,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>,
);
