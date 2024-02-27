import React from "react";
import styles from "./Select.module.scss";
import { MdFlight } from "react-icons/md";

function Select({ label, type, items }) {
  console.log(type);
  return (
    <div
      className={`${styles.select__tag__wrapper} ${
        type === 1 ? styles.type__one__select : styles.type__two__select
      }`}
    >
      {label ? <label> {label} </label> : null}
      <input type="text" placeholder="From" />
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
