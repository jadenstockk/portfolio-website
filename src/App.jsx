import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Index from "./routes/Index/Index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Archive from "./routes/Archive/Archive";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      setLoading(false);
    }, 1000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/projects",
      element: <Archive />,
    },
    {
      path: "*",
      element: <Index />,
    },
  ]);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    );
  }
}

export default App;
