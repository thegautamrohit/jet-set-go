"use-client";
import React from "react";
import styles from "./FormFilter.module.scss";
import Select from "../common/Select/Select";

function FormFilter({ flightData }) {
  //   console.log(flightData);

  return (
    <div className={styles.form__filter__wrapper}>
      <div className={styles.left__wrapper}>
        <Select label={"From"} type={1} />
        <Select label={"To"} type={2} />
      </div>

      <div className={styles.right__wrapper}>
        <div className={styles.filter__div}>
          <Select label={"Filter By"} type={1} />
        </div>
      </div>
      <div className={styles.filter__div}>
        <Select label={"Sort By"} type={2} />
      </div>

      <button>Search</button>
    </div>
  );
}

export default FormFilter;
