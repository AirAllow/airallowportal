// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Lock from "@material-ui/icons/Lock";
import GroupIcon from "@material-ui/icons/Group";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Devices from "views/Devices/Devices";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Groups from "views/Groups/Groups.jsx";
import SignIn from "views/SignIn/SignIn.jsx";

const dashboardRoutes = [
	// {
	// 	path: "/dashboard",
	// 	sidebarName: "Dashboard",
	// 	navbarName: "Material Dashboard",
	// 	icon: Dashboard,
	// 	component: DashboardPage
	// },
	{
		path: "/devices",
		sidebarName: "Devices",
		navbarName: "Devices",
		icon: Lock,
		component: Devices
	},
	{
		path: "/groups",
		sidebarName: "Groups",
		navbarName: "Groups",
		icon: GroupIcon,
		component: Groups
	},
	// {
	// 	path: "/tables",
	// 	sidebarName: "Tables",
	// 	navbarName: "Tables",
	// 	icon: ContentPaste,
	// 	component: TableList
	// },
	// {
	// 	path: "/typography",
	// 	sidebarName: "Typography",
	// 	navbarName: "Typography",
	// 	icon: LibraryBooks,
	// 	component: Typography
	// },
	// {
	// 	path: "/icons",
	// 	sidebarName: "Icons",
	// 	navbarName: "Icons",
	// 	icon: BubbleChart,
	// 	component: Icons
	// },
	// {
	// 	path: "/maps",
	// 	sidebarName: "Maps",
	// 	navbarName: "Map",
	// 	icon: LocationOn,
	// 	component: Maps
	// },
	// {
	// 	path: "/notifications",
	// 	sidebarName: "Notifications",
	// 	navbarName: "Notifications",
	// 	icon: Notifications,
	// 	component: NotificationsPage
	// },
	{
		path: "/user",
		sidebarName: "User Profile",
		navbarName: "Profile",
		icon: Person,
		component: UserProfile
	},
	{
		path: "/signin",
		sidebarName: "Sign Out",
		navbarName: "Sign Out",
		icon: Unarchive,
		component: SignIn
	},

	{ redirect: true, path: "/", to: "/", navbarName: "Redirect" }
];

export default dashboardRoutes;
