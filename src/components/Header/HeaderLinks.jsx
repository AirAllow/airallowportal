import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import firebase from "../../firebase.js";
import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
	state = {
		open: false
	};
	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	logOutButton = () => {
		firebase.auth().signOut();
	};
	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div>
				<div className={classes.searchWrapper}>
					<CustomInput
						formControlProps={{
							className: classes.margin + " " + classes.search
						}}
						inputProps={{
							placeholder: "Search",
							inputProps: {
								"aria-label": "Search"
							}
						}}
					/>
					<Button color="white" aria-label="edit" justIcon round>
						<Search />
					</Button>
				</div>
				<Button
					color={window.innerWidth > 959 ? "transparent" : "white"}
					justIcon={window.innerWidth > 959}
					simple={!(window.innerWidth > 959)}
					aria-label="Dashboard"
					className={classes.buttonLink}
				>
					<Dashboard className={classes.icons} />
					<Hidden mdUp>
						<p className={classes.linkText}>Dashboard</p>
					</Hidden>
				</Button>
				<Manager className={classes.manager}>
					<Target>
						<Button
							color={window.innerWidth > 959 ? "transparent" : "white"}
							justIcon={window.innerWidth > 959}
							simple={!(window.innerWidth > 959)}
							aria-label="Notifications"
							aria-owns={open ? "menu-list" : null}
							aria-haspopup="true"
							onClick={this.handleClick}
							className={classes.buttonLink}
						>
							<Notifications className={classes.icons} />
							<span className={classes.notifications}>5</span>
							<Hidden mdUp>
								<p onClick={this.handleClick} className={classes.linkText}>
									Notification
								</p>
							</Hidden>
						</Button>
					</Target>
					<Popper
						placement="bottom-start"
						eventsEnabled={open}
						className={
							classNames({ [classes.popperClose]: !open }) +
							" " +
							classes.pooperResponsive
						}
					>
						<ClickAwayListener onClickAway={this.handleClose}>
							<Grow
								in={open}
								id="menu-list"
								style={{ transformOrigin: "0 0 0" }}
							>
								<Paper className={classes.dropdown}>
									<MenuList role="menu">
										<MenuItem
											onClick={this.handleClose}
											className={classes.dropdownItem}
										>
											Mike John responded to your email
										</MenuItem>
										<MenuItem
											onClick={this.handleClose}
											className={classes.dropdownItem}
										>
											You have 5 new tasks
										</MenuItem>
										<MenuItem
											onClick={this.handleClose}
											className={classes.dropdownItem}
										>
											You're now friend with Andrew
										</MenuItem>
										<MenuItem
											onClick={this.handleClose}
											className={classes.dropdownItem}
										>
											Another Notification
										</MenuItem>
										<MenuItem
											onClick={this.handleClose}
											className={classes.dropdownItem}
										>
											Another One
										</MenuItem>
									</MenuList>
								</Paper>
							</Grow>
						</ClickAwayListener>
					</Popper>
				</Manager>
				<Button
					color={window.innerWidth > 959 ? "transparent" : "white"}
					justIcon={window.innerWidth > 959}
					simple={!(window.innerWidth > 959)}
					aria-label="Person"
					className={classes.buttonLink}
					onClick={this.logOutButton}
				>
					<Person className={classes.icons} />
					<Hidden mdUp>
						<p className={classes.linkText}>Profile</p>
					</Hidden>
				</Button>
			</div>
		);
	}
}

export default withStyles(headerLinksStyle)(HeaderLinks);

// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

// const styles = {
// 	root: {
// 		flexGrow: 1
// 	},
// 	flex: {
// 		flexGrow: 1
// 	},
// 	menuButton: {
// 		marginLeft: -12,
// 		marginRight: 20
// 	}
// };

// class MenuAppBar extends React.Component {
// 	state = {
// 		auth: true,
// 		anchorEl: null
// 	};

// 	handleChange = (event, checked) => {
// 		this.setState({ auth: checked });
// 	};

// 	handleMenu = event => {
// 		this.setState({ anchorEl: event.currentTarget });
// 	};

// 	handleClose = () => {
// 		this.setState({ anchorEl: null });
// 	};

// 	render() {
// 		const { classes } = this.props;
// 		const { auth, anchorEl } = this.state;
// 		const open = Boolean(anchorEl);

// 		return (
// 			<div className={classes.root}>
// 				<FormGroup>
// 					<FormControlLabel
// 						control={
// 							<Switch
// 								checked={auth}
// 								onChange={this.handleChange}
// 								aria-label="LoginSwitch"
// 							/>
// 						}
// 						label={auth ? "Logout" : "Login"}
// 					/>
// 				</FormGroup>
// 				<AppBar position="static">
// 					<Toolbar>
// 						<IconButton
// 							className={classes.menuButton}
// 							color="inherit"
// 							aria-label="Menu"
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Typography
// 							variant="title"
// 							color="inherit"
// 							className={classes.flex}
// 						>
// 							Photos
// 						</Typography>
// 						{auth && (
// 							<div>
// 								<IconButton
// 									aria-owns={open ? "menu-appbar" : null}
// 									aria-haspopup="true"
// 									onClick={this.handleMenu}
// 									color="inherit"
// 								>
// 									<AccountCircle />
// 								</IconButton>
// 								<Menu
// 									id="menu-appbar"
// 									anchorEl={anchorEl}
// 									anchorOrigin={{
// 										vertical: "top",
// 										horizontal: "right"
// 									}}
// 									transformOrigin={{
// 										vertical: "top",
// 										horizontal: "right"
// 									}}
// 									open={open}
// 									onClose={this.handleClose}
// 								>
// 									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
// 									<MenuItem onClick={this.handleClose}>My account</MenuItem>
// 								</Menu>
// 							</div>
// 						)}
// 					</Toolbar>
// 				</AppBar>
// 			</div>
// 		);
// 	}
// }

// MenuAppBar.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MenuAppBar);
