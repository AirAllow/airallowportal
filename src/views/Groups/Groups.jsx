import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import firebase from "../../firebase.js";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

const db = firebase.firestore();
const styles = {
	cardCategoryWhite: {
		"&,& a,& a:hover,& a:focus": {
			color: "rgba(255,255,255,.62)",
			margin: "0",
			fontSize: "14px",
			marginTop: "0",
			marginBottom: "0"
		},
		"& a,& a:hover,& a:focus": {
			color: "#FFFFFF"
		}
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
		"& small": {
			color: "#777",
			fontSize: "65%",
			fontWeight: "400",
			lineHeight: "1"
		}
	}
};

class Groups extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentWillMount() {
		db.collection("sites")
			.doc("WLnErGtp51DlDiHjOLF8")
			.collection("devices")
			.onSnapshot(snapshot => {
				let changes = snapshot.docChanges();
				changes.forEach(change => {
					if (change.doc.data().deviceID) {
						let dataArray = [
							change.doc.data().deviceName,
							change.doc.data().siteLocation,
							change.doc.data().deviceID,
							change.doc.data().dateCreated.toString()
						];
						let data = this.state.data;
						data.push(dataArray);
						this.setState({ data: data });
					}
				});
			});
		console.log(this.state.data);
	}

	render() {
		console.log(this.state.data);
		const { classes } = this.props;
		console.log("rendering");
		return (
			<Grid container>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Devices</h4>
							<p className={classes.cardCategoryWhite}>
								These are your devices
							</p>
						</CardHeader>
						<CardBody>
							<Table
								tableHeaderColor="primary"
								tableHead={[
									"Name",
									"Site Location",
									"Device ID",
									"Date Created"
								]}
								tableData={this.state.data}
							/>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									onChange={this.deviceNameInputChange}
									labelText="Device Name"
									id="device-name"
									formControlProps={{
										fullWidth: false
									}}
								/>
								<CustomInput
									onChange={this.siteLocationInputChange}
									labelText="Site Location"
									id="site-location"
									formControlProps={{
										fullWidth: false
									}}
								/>
								<Button color="primary" size="sm" onClick={this.onCreateDevice}>
									Create
								</Button>
							</GridItem>
						</CardBody>
					</Card>
				</GridItem>
			</Grid>
		);
	}

	deviceNameInputChange = event => {
		this.setState({ deviceNameInput: event.target.value });
	};

	siteLocationInputChange = event => {
		this.setState({ siteLocationInput: event.target.value });
	};

	onCreateDevice = () => {
		db.collection("sites")
			.doc("WLnErGtp51DlDiHjOLF8")
			.collection("devices")
			.add({
				deviceName: this.state.deviceNameInput,
				siteLocation: this.state.siteLocationInput,
				dateCreated: new Date()
			})
			.then(docRef => {
				docRef.update({
					deviceID: docRef.id
				});
			});
	};
}

export default withStyles(styles)(Groups);
