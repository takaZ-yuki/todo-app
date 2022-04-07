import { BrowserRouter, Link } from "react-router-dom"
import { FooterLayout } from "./components/template/FooterLayout";
import { HeaderLayout } from "./components/template/HeaderLayout";
import { MainLayout } from "./components/template/MainLayout";
import { Router } from "./router/Router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderLayout />
        <MainLayout>
            <Router />
        </MainLayout>
        <FooterLayout />
      </BrowserRouter>
    </>
  );
}
