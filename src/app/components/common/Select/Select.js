"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Select.module.scss";
import { MdFlight } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

function Select({ label, items, borderRadius, setItems }) {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  function inputHandler(e) {
    setInput(e.target.value);

    setShow(true);
  }

  function selectHandler(value) {
    setInput(value);
    setShow(false);
    setItems(value);
  }

  return (
    <div className={styles.select__tag__wrapper}>
      {label ? <label> {label} </label> : null}
      <input
        type="text"
        placeholder={label}
        style={{ borderRadius: borderRadius }}
        value={input}
        onChange={(e) => inputHandler(e)}
        onFocus={() => {
          if (label === "Sort By") {
            setShow(true);
          }
        }}
      />
      {show && (
        <div className={styles.drop_down_wrapper}>
          <span onClick={() => setShow(false)}>
            <IoCloseCircleSharp color="#888" size={22} />
          </span>
          <ul>
            {items?.map((el, idx) => (
              <li key={idx} onClick={() => selectHandler(el)}>
                <MdFlight /> {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
