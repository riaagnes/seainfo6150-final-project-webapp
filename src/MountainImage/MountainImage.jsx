import React from "react";
import styles from "../MountainImage/MountainImage.module.css";

const MountainImage = (props) => {
  return <img className={styles.image} alt={props.text} src={props.url} />;
};

export default MountainImage;
