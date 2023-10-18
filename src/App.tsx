import { useTheme } from "./setup/providers/ThemeProvider";
import classNames from "classnames";
import { Header } from "./widgets/Header";
import { MainPage } from "./pages/MainPage";

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
