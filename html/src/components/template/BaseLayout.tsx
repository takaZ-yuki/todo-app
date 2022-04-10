import { VFC, memo } from "react";
import { Outlet } from "react-router-dom";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";
import { MainLayout } from "./MainLayout";

export const BaseLayout: VFC = memo(() => {
  return (
    <>
      <HeaderLayout />
      <MainLayout>
        <Outlet/>
      </MainLayout>
      <FooterLayout />
    </>
  );
});