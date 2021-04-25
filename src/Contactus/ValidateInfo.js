export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First Name Required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name Required";
  }

  if (!values.message.trim()) {
    errors.message = "Message Required";
  }
  return errors;
}
