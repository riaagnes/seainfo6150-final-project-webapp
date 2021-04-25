import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../MountainListItem/MountainListItem.module.css";
import MountainImage from "../MountainImage/MountainImage.jsx";
import MountainTextToggleButton from "../MountainTextToggleButton/MountainTextToggleButton.jsx";

const MountainListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);
  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <MountainImage
            url={props.mountain.image._url}
            title={props.mountain.title}
          />
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/mountainlist/${props.mountain.id}`}
            >
              {props.mountain.name}
            </Link>
          </h2>
        </header>
        <div className={styles.wrapper}>
          {isTextShowing && (
            <div>
              <p className={styles.text}>{props.mountain.text}</p>
            </div>
          )}
        </div>
        <MountainTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        />
      </article>
    </li>
  );
};

export default MountainListItem;
