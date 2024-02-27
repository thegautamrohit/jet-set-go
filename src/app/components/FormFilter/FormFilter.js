"use-client";
import React from "react";
import styles from "./FormFilter.module.scss";
import Select from "../common/Select/Select";

function FormFilter({ flightData }) {
  return (
    <div className={styles.form__filter__wrapper}>
      <div className={styles.form__top}>
        <div className={styles.left__wrapper}>
          <Select label={"From"} type={1} borderRadius="10px 0px 0px 10px" />
          <Select label={"To"} type={2} borderRadius="0px 10px 10px 0px" />
        </div>
      </div>

      {/* <div className={styles.seperation}></div> */}

      <div className={styles.form__middle}>
        <div className={styles.mono__wrapper}>
          <Select
            label={"Filter By Airlines"}
            borderRadius="10px 0px 0px 10px"
          />
          {/* <div className={styles.seperation}></div> */}

          <div className={styles.mono__wrapper}>
            <Select label={"Sort By"} borderRadius="0px 10px 10px 0px" />
          </div>
        </div>
      </div>

      {/* <div className={styles.seperation}></div> */}

      <div className={styles.form__bottom}>
        <div className={styles.btn__wrapper}>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default FormFilter;
