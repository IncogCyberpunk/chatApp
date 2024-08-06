const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <>
      <div className="flex ml-3">
        <div className="form-control">
            <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text text-white text-lg">Male</span>
            <input
              type="checkbox"
              id="male"
              className="checkbox border-slate-900"
              
              // first the onChange event is triggered which calls the handleCheckBoxChange function with "male" value passed as argument 
              onChange= { ()=> onCheckBoxChange("male")}
              // checked is an attribute of the input element that is used to set the default value of the checkbox
              // here if selectedGender === male then the checkbox will be checked
              checked = {selectedGender === "male"}
              />
          </label>
        </div>  
        <div className="form-control">
          <label htmlFor="female" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text text-white text-lg">Female</span>
            <input
                type="checkbox"
                id="female"
                className="checkbox border-slate-900"
                onChange= { ()=> onCheckBoxChange("female")}
                checked = {selectedGender === "female"}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default GenderCheckBox;

/*
The GenderCheckbox component operates by taking two props: setInputs and inputs. 
It renders checkboxes for selecting gender. When a user selects a gender option,
the onCheckBoxChange(i.e. the handleCheckBoxChange function ) is triggered, which updates the inputs state with
the selected gender using the setInputs function.
The checked attribute (a attribute of the checkbox input) of each checkbox is determined by comparing the current
inputs.gender value to certain values, ensuring the correct checkbox button is selected based on the state which is updated by the 
onCheckBoxChange function.
*/