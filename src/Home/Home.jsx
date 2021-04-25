import React from "react";
import styles from "../Home/Home.module.css";
import MountainListItem from "../MountainListItem/MountainListItem";
const Home = (props) => {
  let displayContent;
  if (props.mountains.mountains.length) {
    displayContent = (
      <ul className={styles.container}>
        {props.mountains.mountains.map((mountain) => (
          <MountainListItem mountain={mountain} key={mountain.id} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return <div>{displayContent}</div>;
};

export default Home;
