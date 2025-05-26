import { useEffect } from "react";
import React from "react";
function Titleupdate() {
  useEffect(() => {
    // Update the title
    document.title = "DODGE";

    // Update the favicon
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/icon/logo.svg"; // Replace with your favicon URL
    }
  }, []);

  
}

export default Titleupdate;
