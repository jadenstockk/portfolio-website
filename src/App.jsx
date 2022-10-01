import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Index from "./pages/Index/Index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <div>
        <Navbar />
        <Index />
      </div>
    );
  }
}

export default App;
