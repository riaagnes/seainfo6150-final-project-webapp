import React, { useState } from "react";
import styles from "./Contactus.module.css";
import useForm from "./UseForm";
import validate from "./ValidateInfo";
const Foo = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [genderDropDown, setGenderDropdown] = useState("");
  const [countryDropDown, setCountryDropdown] = useState("");
  const [radio, setRadio] = useState("");

  return (

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.companyInfo}>
          <h3>SeaMountains</h3>
          <ul>
            <li>
              {" "}
              <i className="fa fa-road"></i> 444 mountlake st
            </li>
            <li>
              <i className="fa fa-phone"></i> (555) 533-3244
            </li>
            <li>
              <i className="fa fa-envelope"></i> seamoutains.set.com
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Email Us</h3>
          <form onSubmit={handleSubmit} noValidate>
            <p>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={values.firstName}
                onChange={handleChange}
              ></input>
              {errors.firstName && (
                <p className={styles.error}>{errors.firstName}</p>
              )}
            </p>

            <p>
              <label className={styles.label}>Middle Name</label>
              <input
                type="text"
                name="middleName"
                placeholder="Enter your Middle Name"
                value={values.middleName}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                value={values.lastName}
                onChange={handleChange}
                required
              ></input>
              {errors.lastName && (
                <p className={styles.error}>{errors.lastName}</p>
              )}
            </p>
            <p>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={values.email}
                onChange={handleChange}
                required
              ></input>
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </p>

            <p>
              <label className={styles.label}>Gender</label>
              <select
                value={values.gender}
                onChange={(e) => {
                  setGenderDropdown(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </p>
            <p>
              <label className={styles.label}>Country of residence</label>
              <select
                value={values.residence}
                onChange={(e) => {
                  setCountryDropdown(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="EU">EU/European Economic Area</option>
                <option value="California">California, USA</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </p>
            <p>
              <label className={styles.label}>
                Would you recommend SeaMoutains to a friend
              </label>
              <div className={styles.radio}>
                <label>1</label>
                <input
                  type="radio"
                  checked={radio === "1"}
                  value="1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                <label>2</label>
                <input
                  type="radio"
                  checked={radio === "2"}
                  value="2"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                <label>3</label>
                <input
                  type="radio"
                  checked={radio === "3"}
                  value="3"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                <label>4</label>
                <input
                  type="radio"
                  checked={radio === "4"}
                  value="4"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                <label>5</label>
                <input
                  type="radio"
                  checked={radio === "5"}
                  value="5"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
              </div>
            </p>
            <p className={styles.full}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </p>
            <p className={styles.full}>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foo;
