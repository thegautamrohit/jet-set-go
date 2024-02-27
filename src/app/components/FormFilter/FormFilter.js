"use client";
import React, { useState } from "react";
import styles from "./FormFilter.module.scss";
import Select from "../common/Select/Select";
import { getDropDownData } from "../../Utils/index";
import Card from "../common/Card/Card";

function FormFilter({ flightData }) {
  const { sourceCityData, destinationCityData, airlinesData } =
    getDropDownData(flightData);
  const sortData = ["Low to high", "High to low"];

  const [sourceCity, setSourceCity] = useState();
  const [destinationCity, setDestinationCity] = useState();
  const [airlines, setAirlines] = useState();
  const [sortOrder, setSortOrder] = useState("");
  console.log(sourceCityData, destinationCityData, airlinesData, sortData);

  const flightDataHandler = () => {
    let arr = [];

    for (let i = 0; i < flightData.length; i++) {
      const el = flightData[i];
      // if (el?.displayData?.)
    }
  };

  return (
    <>
      <div className={styles.form__filter__wrapper}>
        <div className={styles.form__top}>
          <div className={styles.left__wrapper}>
            <Select
              label={"From"}
              type={1}
              borderRadius="10px 0px 0px 10px"
              items={sourceCityData}
              setItems={setSourceCity}
            />
            <Select
              label={"To"}
              type={2}
              borderRadius="0px 10px 10px 0px"
              items={destinationCityData}
              setItems={setDestinationCity}
            />
          </div>
        </div>

        <div className={styles.form__middle}>
          <div className={styles.mono__wrapper}>
            <Select
              label={"Filter By Airlines"}
              borderRadius="10px 0px 0px 10px"
              items={airlinesData}
              setItems={setAirlines}
            />

            <div className={styles.mono__wrapper}>
              <Select
                label={"Sort By"}
                borderRadius="0px 10px 10px 0px"
                item={sortData}
                setItems={setSortOrder}
              />
            </div>
          </div>
        </div>

        <div className={styles.form__bottom}>
          <div className={styles.btn__wrapper}>
            <button>Search</button>
          </div>
        </div>
      </div>

      <Card />
    </>
  );
}

export default FormFilter;
