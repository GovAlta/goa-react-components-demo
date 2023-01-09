import { GoADropdown, GoADropdownItem } from "@abgov/react-components";
import { FormControl, FormLabel, MenuItem } from "@material-ui/core";
import { Select } from "@mui/material";
import React from "react";
import { jsx } from '@emotion/react';
import { Province, ProvinceCode } from "../../data/canadianProvinceAndCities";

interface IProvinceComponent {
  provinces: Array<Province>;
  selectedProvinceCode: ProvinceCode | null;
  setSelectedProvinceCode: React.Dispatch<
    React.SetStateAction<ProvinceCode | null>
  >;
}

const ProvinceComponent = ({
  provinces,
  selectedProvinceCode,
  setSelectedProvinceCode,
}: IProvinceComponent) => {
  const onChange = (_: string, value: string | string[]) => {
    setSelectedProvinceCode(value as ProvinceCode);
  };

  return (
    <>
      <FormControl variant="outlined">
        <FormLabel style={{ display: "block" }}>Provinces</FormLabel>
        <GoADropdown
          name="provinces"
          onChange={onChange}
          placeholder="Select province"
          value={`${selectedProvinceCode ?? ""}`}
        >
          {provinces.map((province, index) => (
            <GoADropdownItem
              name="provinces"
              label={province.name}
              value={`${province.code}`}
              key={`${province.code}-${index}`}
            />
          ))}
        </GoADropdown>
      </FormControl>
    </>
  );
};

export { ProvinceComponent };
