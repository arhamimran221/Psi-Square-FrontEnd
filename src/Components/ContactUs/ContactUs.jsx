import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import contactUs from "../../Assests/contactus-img.png";
import { useNavigate } from "react-router-dom";
import userIcon from "../../Assests/UserIcon.svg";
import MailIcon from "../../Assests/MailIcon.svg";
import PhoneIcon from "../../Assests/PhoneIcon.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });

      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            [name]: "Invalid email format",
          });
        }
      }
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Phone Number is required";
    }
    if (!formData.notes.trim()) {
      newErrors.notes = "Please enter the Message.";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("No validation errors, calling onNextClick");
      Swal.fire({
        title: "Form Submitted!",
        text: "Your form has been Submitted!",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      console.log("Validation errors found, not calling onNextClick");
      setErrors(newErrors);
      Swal.fire(
        "Empty fields Found!",
        "Please fill the required fields!",
        "error"
      );
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="psi_container">
      <div className="flex w-[100%] lg:flex-row flex-col m-auto gap-[40px] mt-[100px] mb-[60px] px-6">
        <div className="lg:w-[40%] w-[90%] flex flex-col gap-[0px]">
          <img src={contactUs} alt="" />
          <div className="text-left  font-nunito lg:text-[40px] text-[20px] text-left my-[10px] font-[700] mt-[-25px]">
            <span className="text-[#086AD8]">You have an idea?</span> We handle
            all the rest.
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%]">
          <div className="text-left  font-nunito lg:text-[40px] text-[20px] text-left my-[10px] font-[700]">
            Contact US
          </div>
          <div className="border-[2px] border-[#007BFF] mb-[20px] w-[33%] rounded-full"></div>
          <form>
            <div className="flex flex-col gap-[5px] mb-[30px]">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter Name"
                onChange={handleInputChange}
                className="bg-[#FAFAFA] text-[#535353] rounded-lg placeholder:text-[#535353] placeholder:text-[14px] text-[14px] px-4 py-4 focus:outline-none border-[2px] border-[#EDEDED] font-nunito"
                style={{
                  backgroundImage: `url(${userIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px",
                  paddingLeft: "35px", // adjust this value to position your text correctly
                }}
              />
              {errors.firstName && (
                <p className="text-sm text-[red] mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="mb-[30px] flex lg:gap-[20px] gap-[16px] w-[100%]">
              <div className="flex flex-col gap-[10px] lg:w-[50%] w-[48%]">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={handleInputChange}
                  className="bg-[#FAFAFA] text-[#535353] rounded-lg placeholder:text-[#535353] placeholder:text-[14px] text-[14px] px-4 py-4 focus:outline-none border-[2px] border-[#EDEDED] font-nunito"
                  style={{
                    backgroundImage: `url(${MailIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "35px", // adjust this value to position your text correctly
                  }}
                />
                {errors.email && (
                  <p className="text-sm text-[red] mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] lg:w-[50%] w-[48%]">
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Mobile Numaber"
                  onChange={handleInputChange}
                  className="bg-[#FAFAFA] text-[#535353] rounded-lg placeholder:text-[#535353] placeholder:text-[14px] text-[14px] px-4 py-4 focus:outline-none border-[2px] border-[#EDEDED] font-nunito"
                  style={{
                    backgroundImage: `url(${PhoneIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "35px", // adjust this value to position your text correctly
                  }}
                />
                {errors.mobile && (
                  <p className="text-sm text-[red] mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <textarea
                type="text"
                name="notes"
                id="notes"
                placeholder="Please tell us how we can help you?"
                onChange={handleInputChange}
                className="bg-[#FAFAFA] text-[#535353] rounded-lg placeholder:text-[#535353] placeholder:text-[14px] text-[14px] px-4 py-4 focus:outline-none border-[2px] border-[#EDEDED] font-nunito"
                style={{
                  resize: "none",
                  height: "300px",
                }}
              />

              {errors.notes && (
                <p className="text-sm text-[red] mt-1">{errors.notes}</p>
              )}
            </div>
          </form>
          <button
            className="rounded-md font-nunito bg-[#007BFF] px-4 py-3 text-sm font-semibold text-[#ffff] shadow-sm  ml-auto mt-[10px]"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
