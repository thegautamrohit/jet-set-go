import React from "react";
import styles from "./Card.module.scss";
import { MdFlight } from "react-icons/md";

function Card() {
  let data = {
    id: "1",
    fare: 3840,
    displayData: {
      source: {
        airport: {
          cityCode: "DEL",
          cityName: "Delhi",
          terminal: "3",
          airportCode: "DEL",
          airportName: "Indira Gandhi Airport",
          countryCode: "IN",
          countryName: "India",
        },
        depTime: "2023-03-31T06:20",
      },
      airlines: [
        {
          airlineCode: "AB",
          airlineName: "JetSpice",
          flightNumber: "1234",
        },
      ],
      stopInfo: "Non stop",
      destination: {
        airport: {
          cityCode: "BOM",
          cityName: "Mumbai",
          terminal: "2",
          airportCode: "BOM",
          airportName: "Mumbai Airport",
          countryCode: "IN",
          countryName: "India",
        },
        arrTime: "2023-03-31T08:40",
      },
      totalDuration: "2h 20m",
    },
  };

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
          <p>
            {new Date(data?.displayData?.source?.depTime).getHours()}:
            {new Date(data?.displayData?.source?.depTime).getMinutes()}
          </p>
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
          <p>
            {new Date(data?.displayData?.destination?.arrTime).getHours()}:
            {new Date(data?.displayData?.destination?.arrTime).getMinutes()}
          </p>
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
