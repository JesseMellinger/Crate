// App Imports
import Login from "../../modules/user/Login";
import Signup from "../../modules/user/Signup";
import Profile from "../../modules/user/Profile";
import Subscriptions from "../../modules/user/Subscriptions";
import EditUserInfo from "../../modules/user/EditUserInfo";
import UserAcount from "../../modules/user/UserAccount";

// User routes
export default {
  login: {
    path: "/user/login",
    component: Login,
  },

  signup: {
    path: "/user/signup",
    component: Signup,
  },

  profile: {
    path: "/user/profile",
    component: Profile,
    auth: true,
  },

  subscriptions: {
    path: "/user/subscriptions",
    component: Subscriptions,
    auth: true,
  },

  edit: {
    path: "/user/edit",
    component: EditUserInfo,
    auth: true,
  },

  account: {
    path: "/user/account",
    component: UserAccount,
    auth: true,
  },
};
