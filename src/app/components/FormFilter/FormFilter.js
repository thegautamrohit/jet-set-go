"use client";
import React, { useState } from "react";
import styles from "./FormFilter.module.scss";
import Select from "../common/Select/Select";
import { getDropDownData, displayFlights } from "../../Utils/index";
import Card from "../common/Card/Card";

function FormFilter({ flightData }) {
  const { sourceCityData, destinationCityData, airlinesData } =
    getDropDownData(flightData);
  const sortData = ["Low to high", "High to low"];

  const [sourceCity, setSourceCity] = useState();
  const [destinationCity, setDestinationCity] = useState();
  const [airlines, setAirlines] = useState();
  const [sortOrder, setSortOrder] = useState("");
  const [flightsToShow, setFlightsToShow] = useState([]);

  const flightDataHandler = () => {
    if (sourceCity === destinationCity) {
      console.log(sourceCity, destinationCity);
      window.alert("Arrival and departure can't be same");
      return;
    }

    const finalRes = displayFlights(
      flightData,
      sourceCity,
      destinationCity,
      airlines,
      sortOrder
    );

    console.log(finalRes);

    setFlightsToShow([...finalRes]);
  };

  console.log(flightsToShow);

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
            <button onClick={() => flightDataHandler()}>Search</button>
          </div>
        </div>
      </div>

      {flightsToShow?.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </>
  );
}

export default FormFilter;
