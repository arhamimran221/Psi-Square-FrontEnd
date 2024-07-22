import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assests/psi-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import hamburgerMenu from "../../Assests/hambur-menu.svg";
import CloseIcon from "../../Assests/close-icon.svg";
import Swal from "sweetalert2";
import userIcon from "../../Assests/UserIcon.svg";
import MailIcon from "../../Assests/MailIcon.svg";
import PhoneIcon from "../../Assests/PhoneIcon.svg";
import { CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);
  const navbarRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const stickyPoint = 1;
      if (currentScrollY > stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const location = useLocation();

  const activeStyle = "font-nunito font-[600] text-[#f26f24] active";
  const nonActiveStyle = "font-nunito font-[400] text-[#fff]";
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="">
      <div
        className={
          isSticky
            ? "w-[100%] fixed bg-[#fff] top-[0px] z-[9999] stick-trans  lg:py-[0px] py-2"
            : "w-[100%] absolute z-[999]  py-2"
        }
        ref={navbarRef}
      >
        <div className="flex w-[100%] justify-between items-center px-6 psi_container">
          <div className="w-[30%]">
            <img
              src={logo}
              alt="psi-logo"
              className="lg:w-[220px] w-[100%] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden block bg-[#1476f2] rounded-full p-2"
          >
            {isOpen ? (
              <img src={CloseIcon} alt="close icon" />
            ) : (
              <img src={hamburgerMenu} alt="" />
            )}
          </button>{" "}
          {isOpen && (
            <div
              className={
                isOpen
                  ? "open w-[80%] flex flex-col gap-[10px] absolute bg-[#000] z-[9999] top-[0px] left-[0px] right-[0px] text-[#0000] pt-[50px] px-4 h-[100vh]"
                  : " w-[90%] flex flex-col gap-[10px] absolute bg-[#000] z-[9999] top-[0px] left-[0px] right-[0px] text-[#0000] pt-[30px] px-4 h-[100vh]"
              }
            >
              <div className="text-[#fff] w-fit">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? activeStyle : nonActiveStyle
                  }
                >
                  Home
                </Link>
              </div>
              <div
                className={
                  isSticky
                    ? "nav-link text-[#fff] w-fit"
                    : "nav-link text-[#fff] w-fit"
                }
              >
                <Link
                  to="/portfolio"
                  className={
                    location.pathname === "/portfolio"
                      ? activeStyle
                      : nonActiveStyle
                  }
                >
                  Portfolio
                </Link>
              </div>
              <div
                className={
                  isSticky
                    ? "nav-link text-[#ffff] w-fit"
                    : "nav-link text-[#fff] w-fit"
                }
              >
                <Link
                  to="/about-us"
                  className={
                    location.pathname === "/about-us"
                      ? activeStyle
                      : nonActiveStyle
                  }
                >
                  About Us
                </Link>
              </div>
              <div
                className={
                  isSticky
                    ? "nav-link text-[#fff] w-fit"
                    : "nav-link text-[#fff] w-fit"
                }
              >
                <Link
                  to="/career"
                  className={
                    location.pathname === "/career"
                      ? activeStyle
                      : nonActiveStyle
                  }
                >
                  Career
                </Link>
              </div>
              <div
                className={
                  isSticky
                    ? "nav-link text-[#ffff] w-fit"
                    : "nav-link text-[#ffff] w-fit"
                }
              >
                <Link
                  to="/services"
                  className={
                    location.pathname === "/services"
                      ? activeStyle
                      : nonActiveStyle
                  }
                >
                  Services
                </Link>
              </div>
              <button
                className={
                  isSticky
                    ? "px-4 py-2 font-nunito rounded-lg text-[#096AD8] font-[600] quote-btn border-[1px] border-[#096AD8]"
                    : "bg-[#096AD8] px-4 py-2 font-nunito rounded-lg text-[#fff] font-[600] quote-btn"
                }
                onClick={() => setOpenQuote(true)}
              >
                Get a Quote
              </button>
            </div>
          )}
          <div className="w-[50%] justify-between items-center lg:flex hidden">
            <div
              className={
                isSticky ||
                location.pathname === "/portfolio-details" ||
                location.pathname === "/career"
                  ? "nav-link text-[#000]"
                  : "nav-link text-[#fff]"
              }
            >
              <Link
                to="/"
                className={
                  location.pathname === "/" ? activeStyle : nonActiveStyle
                }
              >
                Home
              </Link>
            </div>
            <div
              className={
                isSticky ||
                location.pathname === "/portfolio-details" ||
                location.pathname === "/career"
                  ? "nav-link text-[#000]"
                  : "nav-link text-[#fff]"
              }
            >
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? activeStyle
                    : nonActiveStyle
                }
              >
                Portfolio
              </Link>
            </div>
            <div
              className={
                isSticky ||
                location.pathname === "/portfolio-details" ||
                location.pathname === "/career"
                  ? "nav-link text-[#000]"
                  : "nav-link text-[#fff]"
              }
            >
              <Link
                to="/about-us"
                className={
                  location.pathname === "/about-us"
                    ? activeStyle
                    : nonActiveStyle
                }
              >
                About Us
              </Link>
            </div>
            <div
              className={
                isSticky ||
                location.pathname === "/portfolio-details" ||
                location.pathname === "/career"
                  ? "nav-link text-[#000]"
                  : "nav-link text-[#fff]"
              }
            >
              <Link
                to="/career"
                className={
                  location.pathname === "/career" ? activeStyle : nonActiveStyle
                }
              >
                Career
              </Link>
            </div>
            <div
              className={
                isSticky ||
                location.pathname === "/portfolio-details" ||
                location.pathname === "/career"
                  ? "nav-link text-[#000]"
                  : "nav-link text-[#fff]"
              }
            >
              <Link
                to="/services"
                className={
                  location.pathname === "/services"
                    ? activeStyle
                    : nonActiveStyle
                }
              >
                Services
              </Link>
            </div>
            <button
              className={
                isSticky
                  ? "px-4 py-2 font-nunito rounded-lg text-[#096AD8] font-[600] quote-btn border-[1px] border-[#096AD8] ease-in-out duration-300"
                  : "bg-[#096AD8] px-4 py-2 font-nunito rounded-lg text-[#fff] font-[600] quote-btn ease-in-out duration-300"
              }
              onClick={() => setOpenQuote(true)}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      {openQuote && (
        <div className="quote_section h-[100vh] bg-[#ffff] lg:w-[45%] w-[80%] z-[99999] fixed top-0 right-0 bottom-0 p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-nunito lg:text-[40px] text-[20px] text-left my-[10px] font-[700] border-b-[4px] border-[#086AD8] w-fit mb-[30px]">
              Get a <span className="text-[#086AD8]">Quote</span>
            </h2>
            <div>
              <CloseOutlined
                className="text-[30px] cursor-pointer text-[#636363] hover:text-[#dadada] ease-in-out duration-3000"
                onClick={() => setOpenQuote(false)}
              />
            </div>
          </div>
          <form>
            <div className="flex flex-col gap-[5px] mb-[20px]">
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
            <div className="mb-[20px] flex lg:gap-[20px] gap-[16px] w-[100%] flex-col">
              <div className="flex flex-col gap-[5px] lg:w-[100%] w-[100%]">
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
              <div className="flex flex-col gap-[5px] lg:w-[100%] w-[100%]">
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
            <div className="flex flex-col gap-[5px] mb-[10px]">
              <textarea
                type="text"
                name="notes"
                id="notes"
                placeholder="Please tell us how we can help you?"
                onChange={handleInputChange}
                className="bg-[#FAFAFA] text-[#535353] rounded-lg placeholder:text-[#535353] placeholder:text-[14px] text-[14px] px-4 py-4 focus:outline-none border-[2px] border-[#EDEDED] font-nunito"
                style={{
                  resize: "none",
                  height: "190px",
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
      )}
    </div>
  );
};

export default Navbar;
