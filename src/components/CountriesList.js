import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const countriesList = (props) => {
  console.log(props);
  const { countries } = props;
  return (
    <div>
      {countries.map((country) => {
        let imgSrc = `https://www.countryflags.io/${country.altSpellings[0]}/flat/64.png`;
        return (
          <Link
            key={country.cca3}
            to={'/' + country.cca3}
            className="list-group-item list-group-item-action"
          >
            <span role="img">
              <img src={imgSrc} style={{ width: '25px', height: '25px' }} />
            </span>
            {country.name.common}
          </Link>
        );
      })}
    </div>
  );
};

export default countriesList;
