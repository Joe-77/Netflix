import { useEffect } from "react";

export const renderPage = () => {
  return useEffect(() => {
    alert("welcome");
  }, []);
};
