import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/globalstyles";
import routes from "./navigator/routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
