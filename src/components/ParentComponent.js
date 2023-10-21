import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("g");
  const [lastName, setLastName] = useState("o");
  const [checkbox, setCheckbox] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
  };
  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        checkbox={checkbox}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleCheckbox={handleCheckbox}
      />
      <div>
        <DisplayData firstName={firstName} lastName={lastName} />
      </div>
    </div>
  );
};

export default ParentComponent;
