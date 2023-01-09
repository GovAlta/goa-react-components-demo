import { GoADropdown, GoADropdownItem } from "@abgov/react-components";
import { FormControl, FormLabel } from "@material-ui/core";
import { City, ProvinceCode } from "../../data/canadianProvinceAndCities";

interface ICitiesComponent {
  cities: Array<City>;
  selectedProvinceCode: ProvinceCode | null;
}

const CitiesComponent = ({
  cities,
  selectedProvinceCode,
}: ICitiesComponent) => {
  const onChange = (_: string, value: string | string[]) => {};

  return (
    <FormControl variant="outlined">
      <FormLabel style={{ display: "block" }}>Cities</FormLabel>
      <GoADropdown
        name="cities"
        onChange={onChange}
        placeholder="Select cities"
      >
        {cities?.map((city, index) => (
          <GoADropdownItem
            name="cities"
            label={city.name}
            value={`${city.provinceCode}`}
            key={`${city.provinceCode}-${index}`}
          />
        ))}
      </GoADropdown>
    </FormControl>
  );
};

export { CitiesComponent };
