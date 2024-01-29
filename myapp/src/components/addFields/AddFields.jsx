import { useState } from "react";
import FieldSelect from "../fieldSelect/FieldSelect.jsx";
import "../Style/Style.css";

const AddFields = () => {
  const [userType, setUserType] = useState("");
  const [addFieldButtonIsClicked, setAddFieldButtonIsClicked] = useState(false);

  const handleChangeUserType = (event) => {
    setUserType(event.target.value);
  };

  const handleAddFieldClick = () => {
    (userType !== "") ? setAddFieldButtonIsClicked(!addFieldButtonIsClicked) : alert("Select a valid User Type from the dropdown: Student or Self-Employee or Business");
  };

  return (
    <div className="addFields">
        <h1 >FarmwiseAi</h1>
      <h1>Front End Developer - React JS - Assessment</h1>
      <div className="addFieldsContent">
        <div className="userTypeSelect">
          <select name="userDropdown" id="userDropdown" className="userDropdown" value={userType} onChange={handleChangeUserType}>
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Self-Employee">Salaried</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div className="addFieldButtonWrapper">
          <button className="addFieldButton" onClick={handleAddFieldClick}>Add Field</button>
        </div>

        <table className="fieldTable">
          <thead>
            <tr>
              {addFieldButtonIsClicked && <td className="yellowRow">List of fields to be added</td>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FieldSelect />
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
      </div>
    </div>
  );
};

export default AddFields;