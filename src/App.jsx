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

  const errorElement = (
    <div style={{ padding: "300px 50px", textAlign: "center" }}>
      Sorry. It seems like there's been an error. I'm probably working on it
      right now.
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/projects",
      element: <Archive />,
      errorElement,
    },
    {
      path: "*",
      element: <Index />,
      errorElement,
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
