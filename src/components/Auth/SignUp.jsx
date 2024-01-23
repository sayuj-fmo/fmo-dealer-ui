import React, { useState } from "react";
import "../../styles/SignUp.css";
import Car from "../../assets/icons/car.svg";
import User from "../../assets/icons/user.svg";
import Phone from "../../assets/icons/phone.svg";
import StateDealer from "../../assets/icons/stateDealer.svg";
import Email from "../../assets/icons/email.svg";
import Pen from "../../assets/icons/pen.svg";
import Contact from "../../assets/icons/contact.svg";
import Eye from "../../assets/icons/Eye.svg";
import HiddenEye from "../../assets/icons/HiddenEye.svg";
import Lock from "../../assets/icons/lock.svg";
import Logo from "../../assets/icons/logo.svg";
import { validateForm } from "../../utils/formValidations";
import  ReCAPTCHA  from "react-google-recaptcha";

const SignupPage = () => {
  console.log("value ",process.env.REACT_APP_RECAPTCHA_SITE_KEY)
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)
  const [formData, setFormData] = useState({
    dealershipName: "",
    fullName: "",
    phoneNumber: "",
    stateLicenseNumber: "",
    email: "",
    username: "",
    physicalAddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function onChange(value) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const field = event.target.name,
      value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };

  const handleSubmit = () => {
    if (validateForm(formData, setErrors)) {
      return;
    }

    //TODO: Send to Data to server
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg border-2 border-gray-300 signUpContainer">
        <h2 className="text-2xl font-semibold text-center mb-6">
          <div className="block md:hidden flex place-content-center">
            <img src={Logo} alt="logo" />
          </div>
          Create an Account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dealer Name */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Car} alt="car" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.dealershipName ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Dealership Name"
                value={formData.dealershipName}
                name="dealershipName"
                onChange={handleInputChange}
              />
            </div>
            {errors.dealershipName && (
              <p className="text-red-500 text-xs mb-1">
                {errors.dealershipName}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={User} alt="user" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.fullName ? "signupPlaceholderErr" : ""
                }`}
                placeholder="First/Last Name"
                value={formData.fullName}
                name="fullName"
                onChange={handleInputChange}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mb-1">{errors.fullName}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Phone} alt="phone" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.phoneNumber ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mb-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* State Dealer */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={StateDealer} alt="State Dealer" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.stateLicenseNumber ? "signupPlaceholderErr" : ""
                }`}
                placeholder="State Dealer License Number"
                value={formData.stateLicenseNumber}
                name="stateLicenseNumber"
                onChange={handleInputChange}
              />
            </div>
            {errors.stateLicenseNumber && (
              <p className="text-red-500 text-xs mb-1">
                {errors.stateLicenseNumber}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Email} alt="Email" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.email ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mb-1">{errors.email}</p>
            )}
          </div>

          {/* Desired Username */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Pen} alt="Desired Username" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.username ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Desired Username"
                value={formData.username}
                name="username"
                onChange={handleInputChange}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs mb-1">{errors.username}</p>
            )}
          </div>

          {/* Physical Address */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Contact} alt="Physical Address" />
              </span>
              <input
                type="text"
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.physicalAddress ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Physical Address"
                value={formData.physicalAddress}
                name="physicalAddress"
                onChange={handleInputChange}
              />
            </div>
            {errors.physicalAddress && (
              <p className="text-red-500 text-xs mb-1">
                {errors.physicalAddress}
              </p>
            )}
          </div>

          {/* Desired Password */}
          <div className="mb-4 relative w-full">
            <div className="flex items-center h-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={Lock} alt="Lock" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className={`pl-10 pr-4 py-2 w-full border-2 border-018FFD rounded-lg focus:outline-none signupPlaceholder ${
                  errors.password ? "signupPlaceholderErr" : ""
                }`}
                placeholder="Desired Password"
                value={formData.password}
                name="password"
                onChange={handleInputChange}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={handleTogglePassword}
              >
                {!showPassword ? (
                  <img src={Eye} alt="Eye" />
                ) : (
                  <img src={HiddenEye} alt="Hidden Eye" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mb-1">{errors.password}</p>
            )}
          </div>
        </div>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          className="flex place-content-center"
          />

<button
      onClick={handleSubmit}
      className="w-1/2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      disabled={!isCaptchaSuccessful}
    >
      Sign Up
    </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#018FFD] hover:text-[#3a80b6]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
