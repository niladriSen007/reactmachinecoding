import React, { useMemo } from "react";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "India",
    cities: ["Kolkata", "Delhi"],
  },
  {
    name: "Australia",
    value: "Australia",
    cities: ["Sydney", "Perth"],
  },
  {
    name: "Bangladesh",
    value: "Bangladesh",
    cities: ["Dhaka", "Barishal"],
  },
];

const App = () => {
  const [selected, setSelected] = useState(null);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState([]);

  const [selectedCityName,setSelectedCityName] = useState("")

  let selectedCityNames;

  const selectCountry = (e) =>{
    setSelected(e.target.value)
    
  } 

  useMemo(()=>{
    selectedCityNames = countries.filter(country=>country.name === selected)
    setSelectedCity(selectedCityNames?.at(0)?.cities)
    // console.log(selectedCityNames?.at(0)?.cities)
  },[selected])

  

  return (
    <div>
      <div className="flex gap-2 items-center">
        <p className="text-yellow-500 font-bold text-xl">Select your Country</p>
        <select onChange={selectCountry}>
          {countries?.map((country) => (
            <option key={Math.random()} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <p className="text-violet-700 font-bold text-xl">Select your City</p>
        <select onChange={(e) => setSelectedCityName(e.target.value)}>
          {selectedCity?.map((city) => (
            <option key={Math.random()} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <p className="text-green-700 text-bold text-3xl">Selected Country - <span className="text-red-600">{selected}</span></p>
      <p className=" text-blue-600 text-bold text-3xl">Selected City  - <span className="text-pink-600">{selectedCityName}</span></p>
    </div>
  );
};

export default App;
