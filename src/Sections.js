import React from "react";
import Section from "./Section";
import ModelS from "./Desktop-ModelS.jpg";
import ModelX from "./Desktop-ModelX.jpg";
import ModelE from "./tesla-1.jpg";
import Solar from "./Desktop-SolarPanels.jpg";
import Mobile from "./Mobile-Accessories.jpg";
import "./Sections.css";

const Sections = () => {
	return (
		<div className="sections">
			<Section
				first
				twoButtons
				header="Model S"
				subHeader="Order Online for Touchless Delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				image={ModelS}
			/>
			<Section
				twoButtons
				header="Model X"
				subHeader="Order Online for Touchless Delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				image={ModelX}
			/>
			<Section
				twoButtons
				header="Model 3"
				subHeader="Order Online for Touchless Delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				image={ModelE}
			/>
			<Section
				twoButtons
				header="Model Y"
				subHeader="Order Online for Touchless Delivery"
				btn1="Custom Order"
				btn2="Existing Inventory"
				image={Solar}
			/>
			<Section header="Home Accessories" btn1="Shop Now" image={Mobile} />
		</div>
	);
};

export default Sections;
