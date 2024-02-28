"use client";
import React, { useState } from "react";
import styles from "./FormFilter.module.scss";
import Select from "../common/Select/Select";
import { getDropDownData, displayFlights } from "../../Utils/index";
import Card from "../common/Card/Card";
import { IoSearchSharp } from "react-icons/io5";

function FormFilter({ flightData }) {
  const { sourceCityData, destinationCityData, airlinesData } =
    getDropDownData(flightData);
  const sortData = ["Low to high", "High to low"];

  const [sourceCity, setSourceCity] = useState();
  const [destinationCity, setDestinationCity] = useState();
  const [airlines, setAirlines] = useState();
  const [sortOrder, setSortOrder] = useState("");
  const [flightsToShow, setFlightsToShow] = useState();

  const flightDataHandler = () => {
    if (sourceCity === destinationCity && !sourceCity && !destinationCity) {
      console.log(sourceCity, destinationCity);
      window.alert("Please enter valid city");
      return;
    }

    const finalRes = displayFlights(
      flightData,
      sourceCity,
      destinationCity,
      airlines,
      sortOrder
    );

    setFlightsToShow([...finalRes]);
  };

  return (
    <>
      <div className={styles.form__filter__wrapper} id="form__filter__wrapper">
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
                items={sortData}
                setItems={setSortOrder}
              />
            </div>
          </div>
        </div>

        <div className={styles.form__bottom}>
          <div className={styles.btn__wrapper}>
            <button onClick={() => flightDataHandler()}>
              Search <IoSearchSharp color="#fff" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.card__wrapper}>
        {flightsToShow?.length > 0 && (
          <p>
            Showing flights from {sourceCity} from {destinationCity}{" "}
          </p>
        )}

        {flightsToShow?.map((item, index) => (
          <Card data={item} key={index} />
        ))}

        {flightsToShow?.length === 0 && (
          <div className={styles.empty__card}>
            <p>No Flights Available</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FormFilter;
