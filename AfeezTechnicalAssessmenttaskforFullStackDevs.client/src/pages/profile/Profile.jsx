import { useState } from "react";
import Avatar from "../../assets/images/createAcc.png";
import Input from "./Input";
import Select from "./Select";
import { countryList } from "./data";

const Profile = () => {
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    City: "",
    Country: "",
    State: "",
  });
  function handleFormChange(value, e) {
    const newValue = e.target.value;
    setFormData((prev) => ({ ...prev, [value]: newValue }));

    if (value === "Country") {
      const selectedCountry = newValue;
      const selectedCountryData = countryList.find(
        (country) => country.name === selectedCountry
      );
      setStates(selectedCountryData?.states);
      console.log(states);
    }
  }

  function renderForm() {
    console.log(formData);
    setFormData({
      FullName: "",
      Email: "",
      Phone: "",
      City: "",
      Country: "",
      State: "",
    });
  }
  // // handle the backend posting
  // function renderForm() {
  //   console.log(formData);

  //   // Define the URL of your backend endpoint
  //   const backendURL = "http://your-backend-url.com/api/updateProfile";

  //   // Define the data to be sent to the backend
  //   const postData = JSON.stringify(formData);

  //   // Set up options for the fetch request
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: postData,
  //   };

  //   fetch(backendURL, requestOptions)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to send form data to the backend");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Form data sent successfully:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending form data to the backend:", error);
  //     });
  // }

  return (
    <div className="w-full ">
      <div
        className="w-full h-[145px] relative"
        style={{
          background:
            "linear-gradient(to right, rgb(21,131,229), rgb(1,187,212)",
        }}
      >
        <div className="absolute w-[140px] h-[140px] rounded-full border-4 z-10 top-[72.5px] left-1/2 translate-x-[-50%]  border-white bg-white">
          <img
            src={Avatar}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="max-w-[1273px] mx-auto shadow-md md:px-16 pt-32 pb-10 p-5">
        <form className="grid grid-cols-1  md:grid-cols-3 gap-[20px]">
          <Input
            label="Full Name"
            id="fullName"
            name="FullName"
            type="text"
            placeholder="Micray Yuris Shalom"
            change={handleFormChange}
          />
          <Input
            label="Email"
            id="email"
            name="Email"
            type="email"
            placeholder="Email Address"
            change={handleFormChange}
          />
          <Input
            label="Phone"
            id="phone"
            name="Phone"
            type="text"
            placeholder="Phone Number"
            change={handleFormChange}
          />
          <Input
            label="City"
            id="city"
            name="City"
            type="text"
            placeholder="Where are you from?"
            change={handleFormChange}
          />

          <Select
            label="Country"
            name="Country"
            id="country"
            optionDetails="Select Country"
            options={countryList.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
            change={handleFormChange}
          />
          <Select
            label="State"
            name="State"
            id="state"
            optionDetails="Select State"
            options={states.map((state) => (
              <option key={state}>{state}</option>
            ))}
            change={handleFormChange}
          />
        </form>

        <div className=" flex justify-end mt-14">
          <button
            onClick={renderForm}
            className="border border-[#00BCD4] border-1 py-3 px-[18px] rounded-[5px] text-[#00BCD4] font-semibold"
          >
            {" "}
            Edit Profile Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
