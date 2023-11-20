/* eslint-disable react/jsx-key */
// import { useState, useEffect } from "react";
// import Country from "../Country/Country";
// import "./country.css";

// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//   const url = "https://restcountries.com/v3.1/all";

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setCountries(data));
//   }, [setCountries]);
//   return (
//     <div className="countrys">
//       {countries.map((country, index) => (
//         <Country key={index} countrys={country} />
//       ))}
//     </div>
//   );
// };

// export default Countries;

import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./country.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      });
  }, []);

  return (
    <section>
      <h1 style={{ fontSize: "2rem" }}>List of Countries</h1>
      <div className="countries">
        {countries.map((country, index) => (
          // console.log(country)
          <Country key={index} country={country} />
        ))}
      </div>
    </section>
  );
};

export default Countries;
