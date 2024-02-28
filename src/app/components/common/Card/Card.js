import React from "react";
import styles from "./Card.module.scss";
import { MdFlight } from "react-icons/md";
import { formatDate } from "@/app/Utils";

function Card({ data }) {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__top}>
        <p>{data?.displayData?.airlines[0]?.airlineName}</p>
        <p>
          <span>Flight No:</span> {data?.displayData?.airlines[0]?.flightNumber}
        </p>
      </div>

      <div className={styles.card__middle}>
        <div className={styles.left}>
          {/* <p>Departure</p> */}
          <p>{formatDate(new Date(data?.displayData?.source?.depTime))}</p>
          <p> {data?.displayData?.source?.airport?.airportName} </p>
          <p> Terminal: {data?.displayData?.source?.airport?.terminal} </p>
          <p>
            {data?.displayData?.source?.airport?.cityName},{" "}
            {data?.displayData?.source?.airport?.countryName}
          </p>
          <p> </p>
        </div>

        <div className={styles.center}>
          <div className={styles.duration}>
            <p>{data?.displayData?.totalDuration}</p>
            <div>
              <span></span>
              <MdFlight color="#626971" />
            </div>

            <p>{data?.displayData?.stopInfo}</p>
          </div>
        </div>

        <div className={styles.right}>
          {/* <p>Arrival</p> */}

          <p>{formatDate(new Date(data?.displayData?.destination?.arrTime))}</p>

          <p> {data?.displayData?.destination?.airport?.airportName} </p>
          <p> Terminal: {data?.displayData?.destination?.airport?.terminal} </p>
          <p>
            {data?.displayData?.destination?.airport?.cityName},{" "}
            {data?.displayData?.destination?.airport?.countryName}
          </p>
          <p> </p>
        </div>
      </div>

      <div className={styles.card__bottom}>
        <p>Fare: ₹{data?.fare}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Card;
