import React, { useState } from "react";
import styles from "../Contactus/Form.module.css";
import Contactus from "./Contactus";
import ConatctSuccess from "./ContactSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <article className={styles.form_container}>
      {!isSubmitted ? (
        <Contactus submitForm={submitForm} />
      ) : (
        <ConatctSuccess />
      )}
    </article>
  );
};

export default Form;
