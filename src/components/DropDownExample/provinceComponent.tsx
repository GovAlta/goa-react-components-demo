import { GoADropdown, GoADropdownItem, GoAFormItem } from "@abgov/react-components";
import React from "react";
import { Province, ProvinceCode } from "../../data/canadianProvinceAndCities";

interface IProvinceComponent {
  provinces: Array<Province>;
  setSelectedProvinceCode: React.Dispatch<
    React.SetStateAction<ProvinceCode | null>
  >;
}

const ProvinceComponent = ({
  provinces,
  setSelectedProvinceCode,
}: IProvinceComponent) => {
  const onChange = (_: string, value: string | string[]) => {
    setSelectedProvinceCode(value as ProvinceCode);
  };

  return (
    <>
      <GoAFormItem label="Provinces">
        <GoADropdown
          name="provinces"
          onChange={onChange}
          placeholder="Select province"
        >
          {provinces.map((province, index) => (
            <GoADropdownItem
              label={province.name}
              value={`${province.code}`}
              key={`${province.code}-${index}`}
            />
          ))}
        </GoADropdown>
      </GoAFormItem>
    </>
  );
};

export { ProvinceComponent };
