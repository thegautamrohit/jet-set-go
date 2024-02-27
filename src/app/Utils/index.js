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
