export const getDropDownData = (flightData) => {
  let res = {
    sourceCityData: [],
    destinationCityData: [],
    airlinesData: [],
  };

  for (let i = 0; i < flightData.length; i++) {
    const el = flightData[i];
    if (
      !res.sourceCityData.includes(el?.displayData?.source?.airport?.cityName)
    ) {
      res.sourceCityData.push(el?.displayData?.source?.airport?.cityName);
    }
    if (
      !res.destinationCityData.includes(
        el?.displayData?.destination?.airport?.cityName
      )
    ) {
      res.destinationCityData.push(
        el?.displayData?.destination?.airport?.cityName
      );
    }

    if (!res.airlinesData.includes(el?.displayData?.airlines[0]?.airlineName)) {
      res.airlinesData.push(el?.displayData?.airlines[0]?.airlineName);
    }
  }

  return res;
};

export const displayFlights = (
  flightData,
  sourceCity,
  destinationCity,
  airlines,
  sortOrder
) => {
  let res = [];
  for (let i = 0; i < flightData.length; i++) {
    const el = flightData[i];

    if (
      el?.displayData?.source?.airport?.cityName === sourceCity &&
      el?.displayData?.destination?.airport?.cityName === destinationCity
    ) {
      res.push(el);
    }
  }

  if (airlines) {
    res = res.filter(
      (el) => el?.displayData?.airlines[0]?.airlineName === airlines
    );
  }

  return res;
};
