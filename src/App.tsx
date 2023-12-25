import { useTheme } from "./setup/providers/ThemeProvider";
import classNames from "classnames";
import { Header } from "./common/Layout/Header";
import { Footer } from "./common/Layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
