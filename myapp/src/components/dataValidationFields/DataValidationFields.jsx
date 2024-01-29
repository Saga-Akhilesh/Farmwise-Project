import React, { useState } from "react";

const DataValidationFields = (fieldTypeProps) => {
  const fieldType = fieldTypeProps.type;
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      displayName: formData.get("fieldDisplayName"),
      dataType: formData.get("fieldDataTypeDropdown"),
      minDate: formData.get("fieldDateMinRange"),
      maxDate: formData.get("fieldDateMaxRange"),
      dataLength: formData.get("fieldDataLength"),
      dataDropdownLength: formData.get("fieldDataDropdownLength"),
      mandatory: formData.get("fieldMandatory"),
      dataDropdown: formData.get("fieldDataDropdown"),
      data: formData.get("fieldData"),
    };
    setSubmittedData((prevData) => [...prevData, data]);
    event.target.reset();
  };

  return (
    <div className="dataValidationFieldsWrapper">
      <div className="dataValidationFields">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fieldDisplayName"><b>Field Display Name</b></label>
          <input type="text" className="fieldDisplayName" id="fieldDisplayName" name="fieldDisplayName" />

          <label htmlFor="fieldDataTypeDropdown"><b>Field Data Type</b></label>
          <select name="fieldDataTypeDropdown" id="fieldDataTypeDropdown" className="fieldDataTypeDropdown">
            <option value="">Select Field Data Type</option>
            <option value="Number">Number</option>
            <option value="String">String</option>
            <option value="Date">Date</option>
          </select>

          {fieldType === "Date-Picker" ? (
            <div>
              <label htmlFor="">Date Range Validation</label>
              <label htmlFor="fieldDateMinRange">Min Date</label>
              <input type="date" className="fieldDateMinRange" id="fieldDateMinRange" name="fieldDateMinRange" />
              <label htmlFor="fieldDateMaxRange">Max Date</label>
              <input type="date" className="fieldDateMaxRange" id="fieldDateMaxRange" name="fieldDateMaxRange" />
            </div>
          ) : fieldType === "Text-Box" ? (
            <div>
              <label htmlFor="fieldDataLength"><b>Field Max Length Allowed</b></label>
              <input type="number" className="fieldDataLength" id="fieldDataLength" name="fieldDataLength" />
            </div>
          ) : (
            <div>
              <label htmlFor="fieldDataDropdownLength"><b>Field Max Length Allowed </b></label>
              <input type="text" className="fieldDataDropdownLength" id="fieldDataDropdownLength" name="fieldDataDropdownLength" />
            </div>
          )}

          <select name="fieldMandatory" id="fieldMandatory" className="fieldMandatory">
            <option value="">Mandatory?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {fieldType === "Dropdown" ? (
            <div>
              <label htmlFor="fieldDataDropdown"><b>Field Data</b></label>
              <input type="text" className="fieldDataDropdown" id="fieldDataDropdown" name="fieldDataDropdown" placeholder="Enter space separated: e.g. 'CSE IT ECE EEE MECH'" />
            </div>
          ) : (
            <div>
              <label htmlFor="fieldData">Field Data</label>
              <input type="text" className="fieldData" />
            </div>
          )}

          <button className="fieldConfirmBtn" id="fieldConfirmBtn" name="fieldConfirmBtn">Submit</button>
        </form>
      </div>

      <div className="submittedData">
 <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Field Name</th>
 <th>Field Type</th>
        <th>Field Data Type</th>
        <th>Field Validations</th>
        <th>Field Data</th>
        <th>Is Mandatory</th>
      </tr>
    </thead>
    <tbody>
      {submittedData.map((data, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{data.displayName}</td>
          <td>{fieldType}</td>
          <td>{data.dataType}</td>
          <td>
            {fieldType === "Date-Picker" && (
              <>
                <p>Min Date: {data.minDate}</p>
                <p>Max Date: {data.maxDate}</p>
              </>
            )}
            {fieldType === "Text-Box" && <p>Data Length: {data.dataLength}</p>}
            {fieldType === "Dropdown" && (
              <>
                <p>Data Dropdown: {data.dataDropdown}</p>
                <p>Data Dropdown Length: {data.dataDropdownLength}</p>
              </>
            )}
          </td>
          <td>{data.data}</td>
          <td>{data.mandatory}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  );
};

export default DataValidationFields;