import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import "../App.css";
import Form from "../Contactus/Form";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs.jsx";
import IndividualMountain from "../IndividualMountain/IndividualMountain";
import Error from "../Error/Error.jsx";
const NavBar = (props) => {
  const [navLinkToggle, setNavLinkToggle] = useState(false);
  const [className, setClassName] = useState("navlinks");
  const handleNavLinksToggle = () => {
    setNavLinkToggle(!navLinkToggle);
    if (navLinkToggle) {
      setClassName("navlinks active");
    } else {
      setClassName("navlinks");
    }
  };

  return (
    <div>
      <nav>
        <div className={styles.logo}>
          <i className="fas fa-mountain mon"></i>
          <h3>SeaMountains</h3>
        </div>
        <ul className={className}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div onClick={handleNavLinksToggle} className={styles.hamburgerToggle}>
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact render={() => <Home mountains={props} />} />
        <Route path="/contact" exact render={() => <Form />} />
        <Route path="/about" exact render={() => <AboutUs />} />

        <Route
          exact
          path={`/mountainlist/:id`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props

            return props ? (
              <IndividualMountain mountain={props.mountains[match.params.id]} />
            ) : null;
          }}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
};
export default NavBar;
