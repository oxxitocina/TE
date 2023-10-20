import { HandbookPage } from "@/pages/HandbookPage"
import { MainPage } from "@/pages/MainPage"
import { ErrorPage } from "@/pages/ErrorPage"

export const Routes = {
    MAIN: {
        path: '/',
        element: <MainPage/>
    },
    HANDBOOK: {
        path: '/handbook/:topicName',
        element: <HandbookPage/>
    },
    NOT_FOUND_PAGE: {
        path: '*',
        element: <ErrorPage/>
    }
}