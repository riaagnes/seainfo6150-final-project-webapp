import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import styles from "../IndividualMountain/IndividualMountain.module.css";
import { Link } from "react-router-dom";

const IndividualMountain = (props) => {
  return (
    <div>
      <Link to="/" className={styles.back}>
        Back
      </Link>
      <h1>{props.mountain.name}</h1>
      <article className={styles.article}>
        <img
          className={styles.image}
          alt={props.mountain.name}
          src={props.mountain.details.image_url}
        />
        <div className={styles.gridContainer}>
          <HTMLText text={props.mountain.details.detail} />
        </div>
      </article>
    </div>
  );
};

export default IndividualMountain;
