import { memo } from "react";
import { Route, Routes } from "react-router-dom"
import { About } from "../components/pages/About";
import { ResetPassword } from "../components/pages/ResetPassword";
import { Contact } from "../components/pages/Contact";
import { ForgotPassword } from "../components/pages/ForgotPassword";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Profile } from "../components/pages/Profile";
import { ProfileEdit } from "../components/pages/ProfileEdit";
import { SignIn } from "../components/pages/SignIn";
import { SignUp } from "../components/pages/SignUp";
import { TaskList } from "../components/pages/TaskList";

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/task" element={<TaskList />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/profile/edit" element={<ProfileEdit />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Page404 />}></Route>
  </Routes>
  )
})