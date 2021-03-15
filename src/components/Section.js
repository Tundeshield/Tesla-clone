import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../styles/Section.css";
import Button from "./Button";

function Section({ header, subHeader, btn1, btn2, image, first, twoButtons }) {
	return (
		<div
			className="section"
			style={{ backgroundImage: `url(${image})`, maxWidth: "100vw" }}
		>
			<div className="section__body">
				<div className="section__info">
					<h1>{header}</h1>
					<p>{subHeader}</p>
				</div>
				<div className="section__btns">
					<Button imp="primary" text={btn1} link={btn1} />
					{twoButtons && <Button imp="secondary" text={btn2} link={btn2} />}
				</div>
				{first && (
					<div className="arrow">
						<ExpandMoreIcon />
					</div>
				)}
			</div>
		</div>
	);
}

export default Section;
