import React, { useState } from "react";
import DatamapsIndia from "react-datamaps-india";
import "../styles/map.css";
import MyFormComponent from "./mapForm";

const MapChart = () => {
  const [regionData, setRegionData] = useState({

  });

  // Function to handle new form data and update regionData
  const handleFormData = (data) => {
    const { state, acres } = data;
    setRegionData((prevRegionData) => ({
      ...prevRegionData,
      [state]: { value: (prevRegionData[state])?prevRegionData[state].value+acres:acres },
    }));
  };

  return (
    <div>
      <MyFormComponent onSubmitData={handleFormData} />

      <DatamapsIndia
        regionData={regionData}
        hoverComponent={({ value }) => {
          return (
            <div>
              <div>{(value.value)?value.value:0} Acres</div>
            </div>
          );
        }}
        mapLayout={{
          title: "Disease Outbreak",
          legendTitle: "Number of Acres",
          startColor: "#FFDAB9",
          endColor: "#FF6347",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "green",
          height: 70,
          weight: 30,
        }}
      />
    </div>
  );
};

export default MapChart;
