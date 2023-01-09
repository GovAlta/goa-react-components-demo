import React, { useEffect, useState } from "react";
import {
  cities,
  City,
  Province,
  ProvinceCode,
  provinces,
} from "../../data/canadianProvinceAndCities";
import { CitiesComponent } from "./citiesComponent";
import { ProvinceComponent } from "./provinceComponent";

const DropDownExampleComponent = () => {
  const [listOfProvicnes] = useState<Array<Province>>(provinces);
  const [listOfCities, setListOfCities] = useState<Array<City>>([]);
  const [selectedProvinceCode, setSelectedProvinceCode] =
    useState<ProvinceCode | null>(null);

  useEffect(() => {
    setListOfCities(
      cities.filter((x) => x.provinceCode === selectedProvinceCode)
    );
  }, [selectedProvinceCode]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <div>
          {listOfProvicnes?.length > 0 && (
            <ProvinceComponent
              provinces={listOfProvicnes}
              selectedProvinceCode={selectedProvinceCode}
              setSelectedProvinceCode={setSelectedProvinceCode}
            />
          )}
        </div>
        <div>
          {listOfCities?.length > 0 && (
            <CitiesComponent
              cities={listOfCities}
              selectedProvinceCode={selectedProvinceCode}
            />
          )}
        </div>
      </div>
      <div>
        {listOfCities?.length > 0 && (
          <>
            <span>updated cities list to prove that cities gets updated</span>
            {listOfCities.map((city, index) => (
              <div style={{ display: "flex" }}>{city.name}</div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export { DropDownExampleComponent };
