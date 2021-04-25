import React from "react";
import styles from "../MountainTextToggleButton/MountainTextToggleButton.module.css";

const MountainTextToggleButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

export default MountainTextToggleButton;
