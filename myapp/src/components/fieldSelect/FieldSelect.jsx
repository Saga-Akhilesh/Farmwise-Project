import { useState } from "react";
import DataValidationFields from "../dataValidationFields/DataValidationFields.jsx";


const FieldSelect = () => {

    const [fieldType, setFieldType] = useState("");

    const handleFieldTypeChange = (e) => {
        setFieldType(e.target.value);
    };

  return (
    <div className="fieldSelect">
        <div className="fieldType">
            <label htmlFor="fieldDropdown"><b>Field Type</b></label>
            <select name="fieldDropdown" id="fieldDropdown" className="fieldDropdown" value={fieldType} onChange={handleFieldTypeChange}>
                <option value="">Select Field Type</option>
                <option value="Text-Box">Text-Box</option>
                <option value="Dropdown">Dropdown</option>
                <option value="Date-Picker">Date-Picker</option>
            </select>
        </div>
        <span>
            {fieldType !== "" ? <DataValidationFields key={fieldType} type={fieldType}/> : <></>}
        </span>
    </div>
  );
}

export default FieldSelect;