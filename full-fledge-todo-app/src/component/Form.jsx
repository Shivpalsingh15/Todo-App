import React, { useState } from "react";
function Form(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mStatus: false ? "Married" : "Unmarried",
  });
  //   console.log("formData:", formData);
  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const { name, value, checked, type } = event.target;
    console.log("type:", type);
    console.log("checked:", checked);
    console.log("name:", value);
    // console.log("name, value:", name, value);

    if (type === "checkbox") {
      console.log("aa rh h ");
      return setFormData({
        ...formData,
        //   [event.target.name]: event.target.value,
        [name]: checked ? "Married" : "Unmarried",
      });
    }
    setFormData({
      ...formData,
      //   [event.target.name]: event.target.value,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    if (!isDisabled) {
      // alert("button mt dabao re paglo");
      return;
    }
    event.preventDefault();

    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      mStatus: "",
    });
  };
  let isDisabled = formData.firstName !== "" && formData.lastName !== "";
  console.log("isDisabled:", isDisabled);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* <label htmlFor=""></label> */}
        <input
          type="text"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <br />
        <input
          type="text"
          placeholder="lastName"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <br />
        <label htmlFor="mStatus">
          Marital Status
          <input
            id="mStatus"
            type="checkbox"
            name="mStatus"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
        {/* <button disabled={!isDisabled}>Submit</button> */}
      </form>
    </div>
  );
}

export default Form;
