

export const validateForm = (formData, setErrors) => {
  const newErrors = {};

  // Validate Dealership Name
  if (formData.dealershipName.trim() === "") {
    newErrors.dealershipName = "Dealership Name is required";
  } else if(formData.dealershipName.length < 2){
    newErrors.dealershipName = 'Dealership name should be at least two characters.';
  }

  // Validate Full Name
  if (formData.fullName.trim() === "") {
    newErrors.fullName = "Full Name is required";
  } // Check if the name contains only alphabetic characters
  else if (!/^[a-zA-Z]+$/.test(formData.fullName)) {
    newErrors.fullName = "Name should contain only alphabetic characters.";
  } else if(formData.fullName.length < 2){
    newErrors.fullName ='Name should be at least two characters.';
  }

  // Validate Phone Number
  if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phoneNumber)) {
    newErrors.phoneNumber = "Please enter a valid US phone number";
  }

  // Validate State License Number
  if (formData.stateLicenseNumber.trim() === "") {
    newErrors.stateLicenseNumber = "State Dealer License Number is required";
  } else if(formData.stateLicenseNumber.length < 2){
    newErrors.stateLicenseNumber = 'License number should be at least two characters.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  // Validate Username
  if (formData.username.trim() === "") {
    newErrors.username = "Desired Username is required";
  } else if(formData.username.length < 8){
    newErrors.username ="Username should be at least eight characters.";
  }

  // Validate Physical Address
  if (formData.physicalAddress.trim() === "") {
    newErrors.physicalAddress = "Physical Address is required";
  }

  // Validate Password
  if (formData.password.trim() === "") {
    newErrors.password = "Desired Password is required";
  } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
    newErrors.password ="Password should be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
  }

  // Set errors and prevent form submission if there are errors
  setErrors(newErrors);
  if (Object.values(newErrors).some((error) => error)) {
    console.log("Form has errors. Please fix them before submitting.");
    return true;
  }
};
