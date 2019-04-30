import Dashboard from "./views/Dashboard.jsx";
import Icons from "./views/Icons.jsx";
import Map from "./views/Map.jsx";
import Notifications from "./views/Notifications.jsx";
import Rtl from "./views/Rtl.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import UserProfile from "./views/UserProfile.jsx";


var routes = [
  {
    path: "/typography",
    name: "Infant < 1 Yr Old",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Adult CPR",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Language Support",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Latest Guidelines",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "AED Map",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Outcomes",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/rtl-support",
    name: "Right to Left Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  },

];
export default routes;
