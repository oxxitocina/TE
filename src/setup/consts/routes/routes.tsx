import { HandbookPage } from "@/pages/HandbookPage";
import { MainPage } from "@/pages/MainPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { QuizzesPage } from "@/pages/QuizzesPage";

export const Routes = {
  MAIN: {
    path: "/",
    element: <MainPage />,
  },
  HANDBOOK: {
    path: "/handbook/:topicName",
    element: <HandbookPage />,
  },
  QUIZ_PAGE: {
    path: "/quiz/:topicName",
    element: <QuizzesPage />,
  },
  NOT_FOUND_PAGE: {
    path: "*",
    element: <ErrorPage />,
  },
};
