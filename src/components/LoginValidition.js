export const validity = (data) => {
  const errors = {};

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

  return errors;
};
