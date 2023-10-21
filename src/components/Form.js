function Form({
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  checkbox,
  handleCheckbox,
}) {
  console.log(firstName, lastName, checkbox);
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <input type="text" value={lastName} onChange={handleLastName} />
      <br></br>
      <label htmlFor="isChecked">
        click to checkbox
        <input
          type="checkbox"
          id="isChecked"
          checked={checkbox}
          onChange={handleCheckbox}
        />
      </label>

      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
