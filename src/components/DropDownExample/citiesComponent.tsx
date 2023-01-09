import { GoADropdown, GoADropdownItem, GoAFormItem } from "@abgov/react-components";
import { City } from "../../data/canadianProvinceAndCities";

interface ICitiesComponent {
  cities: Array<City>;
}

const CitiesComponent = ({
  cities,
}: ICitiesComponent) => {
  const onChange = (_: string, value: string | string[]) => {};

  return (
    <GoAFormItem label="Cities">
      <GoADropdown
        name="cities"
        onChange={onChange}
        placeholder="Select cities"
      >
        {cities?.map((city, index) => (
          <GoADropdownItem
            label={city.name}
            value={`${city.provinceCode}`}
            key={`${city.provinceCode}-${index}`}
          />
        ))}
      </GoADropdown>
    </GoAFormItem>
  );
};

export { CitiesComponent };
