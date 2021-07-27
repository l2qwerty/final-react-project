import { useLocation } from "react-router-dom";
import React from "react";

function NotFound() {
  const location = useLocation();

  return (
    <h2>
      Ups, wrong way <code>{location.pathname}</code>
    </h2>
  );
}

export default NotFound;
