import React from "react";
import Select from "react-select";
import { colourOptions } from "../data";

function SelectTag() {
	return (
		<div>
			<div style={{ width: "100px" }}>
				<Select
					className="basic-single"
					classNamePrefix="select"
					name="color"
					options={colourOptions}
					isSearchable={true}
				/>
			</div>
		</div>
	);
}

export default SelectTag;
