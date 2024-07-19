import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import AboutUs from "@/pages/about-us";
import Homepage from "@/pages/home-page";
import SignIn from "@/pages/sign-in";

import MainLayout from "@/components/layouts/main-layout";

import { ROUTE_NAME } from "@/constants/route-name";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_NAME.HOME} element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path={ROUTE_NAME.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTE_NAME.AUTHENTICATE.SIGN_IN} element={<SignIn />} />
    </Route>,
  ),
);
