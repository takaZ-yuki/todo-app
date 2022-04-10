import { BrowserRouter, Link } from "react-router-dom"
import { Router } from "./router/Router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
