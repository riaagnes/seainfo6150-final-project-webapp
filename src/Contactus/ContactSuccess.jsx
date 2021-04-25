import React from "react";
import styles from "../Contactus/ContactSuccess.module.css";
const ContactSuccess = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.form_success}>We have received your request!</h1>
      <img
        className={styles.form_img_2}
        src="https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-3.svg"
        alt="success"
      />
    </div>
  );
};

export default ContactSuccess;
