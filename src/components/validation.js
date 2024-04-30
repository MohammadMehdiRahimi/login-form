export const validity = (data) => {
  const errors = {};
  if (data.page === "signup") {
    if (!data.name.trim()) {
      errors.name = "Name is requier";
    } else {
      delete errors.name;
    }
    if (!data.email.trim()) {
      errors.email = "Email is requier";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      // eslint-disable-next-line
      errors.email = "Email is invalid";
    } else {
      delete errors.email;
    }
    if (!data.password.trim()) {
      errors.password = "Password is requier";
    } else if (data.password.length < 6) {
      errors.password = "Password is short";
    } else {
      delete errors.password;
    }

    if (!data.confirmpassword.trim()) {
      errors.confirmpassword = "Confirm password is requier";
    } else if (data.confirmpassword !== data.password) {
      errors.confirmpassword = "Confirm password is not match";
    } else {
      delete errors.confirmpassword;
    }
    if (!data.isActived) {
      errors.isActived = "Accept all  is required";
    }
  } else {
    if (!data.email.trim()) {
      errors.email = "Email is requier";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      // eslint-disable-next-line
      errors.email = "Email is invalid";
    } else {
      delete errors.email;
    }
    if (!data.password.trim()) {
      errors.password = "Password is requier";
    } else if (data.password.length < 6) {
      errors.password = "Password is short";
    } else {
      delete errors.password;
    }
  }
  return errors;
};
