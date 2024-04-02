import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
 import LandingPage from "./pages/LandingPage";
 import Logging from "./pages/Logging";
 import Login from "./pages/Login";


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/products/:productId" element={<ProductDetails/>} /> */}
        <Route path="/logging" element={<Logging />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Route>
    )
  );

  export default router;