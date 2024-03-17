import { useGlobalContext } from "../components/Context";

export const getThem = () => {
  const theme = localStorage.getItem("theme") || "myLight";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
export const validateFormInputs = (formData) => {
  // Replace with your specific validation rules
  const errors = {};

  if (!formData.from_name || formData.from_name.trim() === "") {
    errors.name = "Name is required.";
  }

  if (
    !formData.to_name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.to_name)
  ) {
    errors.email = "Invalid email format.";
  }
  if (!formData.message) {
    errors.message = "message is required.";
  }

  return errors;
};
export const sendDEmail = (formData, sending, setSending) => {
  const validationErrors = validateFormInputs(formData);

  if (Object.keys(validationErrors).length === 0) {
    setSending(true);
    emailjs
      .send(
        "service_413zpcx",
        "template_7mtfjthc",
        formData,
        "pQu7T7XHIZ9AYuBa0"
      )

      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("email sent");
          setSending(false);
        },
        (error) => {
          setSending(false);

          console.log("FAILED...", error.text);
          toast.error("error.text");
        }
      );
  } else {
    setSending(false);

    toast.error(
      validationErrors.name ||
        validationErrors.email ||
        validationErrors.message
    );
  }
};

export const inputChange = (e, updateData) => {
  const newData = {
    [e.target.name]: e.target.value,
  };

  updateData(newData);
};
