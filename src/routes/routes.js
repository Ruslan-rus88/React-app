/*
*
*
 Can not use this because it causes react Hooks to stop work
*
*
 */
import Home from "../pages/home/home";
import Countries from "../pages/countries/countries";
import Users from "../pages/users/users";
import Sign from "../pages/sign/signIn"

import { HOME_PATH, COUNTRIES_PATH, USERS_PATH, SIGN_PATH } from "./paths";

export const routes = [
    {
        path: HOME_PATH,
        component: Home,
        exact: true
    },
    {
        path: COUNTRIES_PATH,
        component: Countries,
    },
    {
        path: USERS_PATH,
        component: Users,
    },
    {
        path: SIGN_PATH,
        component: Sign,
    },

]
