import React from "react";
import styles from "./Select.module.scss";

function Select({ label, items, borderRadius }) {
  return (
    <div className={styles.select__tag__wrapper}>
      {label ? <label> {label} </label> : null}
      <input
        type="text"
        placeholder={label}
        style={{ borderRadius: borderRadius }}
      />
      {/* <div className={styles.drop_down_wrapper}>
        <ul>
          <li>
            <MdFlight /> Test
          </li>
          <li>
            <MdFlight /> Test
          </li>
          <li>
            <MdFlight /> Test
          </li>
          <li>
            <MdFlight /> Test
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Select;
