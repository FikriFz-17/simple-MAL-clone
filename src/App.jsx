import { router } from "./routers/route";
import { RouterProvider } from "react-router-dom";

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
