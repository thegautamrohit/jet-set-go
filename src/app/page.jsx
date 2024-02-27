"use-client";

import React from "react";
import FormFilter from "./components/FormFilter/FormFilter";
import Card from "../app/components/common/Card/Card";

async function getData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    const data = await response.json();
    return data.data.result;
  } catch (error) {
    window.alert(error.message);
  }
}

async function Page() {
  const flightData = await getData();

  return (
    <>
      <FormFilter flightData={flightData} />
    </>
  );
}

export default Page;
