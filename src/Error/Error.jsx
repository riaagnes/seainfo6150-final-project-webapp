import React from 'react'
import styles from "../Error/Error.module.css";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className={styles.content_wrapper}>
    <Link to="/" className={styles.back}>
         Back
       </Link>
        <div className={styles.image}>
          <picture>
            <source
              media="(max-width: 300px)"
              srcSet="https://placekitten.com/200/200/ 200w"
            />
            <source
              media="(max-width: 600px)"
              srcSet="https://placekitten.com/400/400 100w"
            />
            <source
              media="(max-width: 1500px)"
              srcSet="https://placekitten.com/800/800 800w"
            />
            <img src="https://placekitten.com/100/100" alt="This is a kitten" />
          </picture>
        </div>
        <div className={styles.title}>
            Oh no! Something went wrong. please click back button
        </div>
      
    </div>
    )
}

export default Error
