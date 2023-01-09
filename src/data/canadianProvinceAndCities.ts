export enum ProvinceCode {
    AB = "AB",
    BC = "BC",
    MB = "MB",
};

export type Province = {
  code: ProvinceCode;
  name: string;
};

export type City = {
  name: string;
  provinceCode: ProvinceCode;
};

export const provinces: Array<Province> = [
  { name: "Alberta", code: ProvinceCode.AB },
  { name: "British Columbia", code: ProvinceCode.BC },
  { name: "Manitoba", code: ProvinceCode.MB },
];

export const cities: Array<City> = [
  { provinceCode: ProvinceCode.AB, name: "Airdrie" },
  { provinceCode: ProvinceCode.AB, name: "Grande Prairie" },
  { provinceCode: ProvinceCode.AB, name: "Red Deer" },
  { provinceCode: ProvinceCode.AB, name: "Beaumont" },
  { provinceCode: ProvinceCode.AB, name: "Hanna" },
  { provinceCode: ProvinceCode.AB, name: "St. Albert" },
  { provinceCode: ProvinceCode.AB, name: "Bonnyville" },
  { provinceCode: ProvinceCode.AB, name: "Hinton" },
  { provinceCode: ProvinceCode.AB, name: "Spruce Grove" },
  { provinceCode: ProvinceCode.AB, name: "Brazeau" },
  { provinceCode: ProvinceCode.AB, name: "Irricana" },
  { provinceCode: ProvinceCode.AB, name: "Strathcona County" },
  { provinceCode: ProvinceCode.AB, name: "Breton" },
  { provinceCode: ProvinceCode.AB, name: "Lacombe" },
  { provinceCode: ProvinceCode.AB, name: "Strathmore" },
  { provinceCode: ProvinceCode.AB, name: "Calgary" },
  { provinceCode: ProvinceCode.AB, name: "Leduc" },
  { provinceCode: ProvinceCode.AB, name: "Sylvan Lake" },
  { provinceCode: ProvinceCode.AB, name: "Camrose" },
  { provinceCode: ProvinceCode.AB, name: "Lethbridge" },
  { provinceCode: ProvinceCode.AB, name: "Swan Hills" },
  { provinceCode: ProvinceCode.AB, name: "Canmore" },
  { provinceCode: ProvinceCode.AB, name: "McLennan" },
  { provinceCode: ProvinceCode.AB, name: "Taber" },
  { provinceCode: ProvinceCode.AB, name: "Didzbury" },
  { provinceCode: ProvinceCode.AB, name: "Medicine Hat" },
  { provinceCode: ProvinceCode.AB, name: "Turner Valley" },
  { provinceCode: ProvinceCode.AB, name: "Drayton Valley" },
  { provinceCode: ProvinceCode.AB, name: "Olds" },
  { provinceCode: ProvinceCode.AB, name: "Vermillion" },
  { provinceCode: ProvinceCode.AB, name: "Edmonton" },
  { provinceCode: ProvinceCode.AB, name: "Onoway" },
  { provinceCode: ProvinceCode.AB, name: "Wood Buffalo" },
  { provinceCode: ProvinceCode.AB, name: "Ft. Saskatchewan" },
  { provinceCode: ProvinceCode.AB, name: "Provost" },
  { provinceCode: ProvinceCode.BC, name: "Burnaby" },
  { provinceCode: ProvinceCode.BC, name: "Lumby" },
  { provinceCode: ProvinceCode.BC, name: "City of Port Moody" },
  { provinceCode: ProvinceCode.BC, name: "Cache Creek" },
  { provinceCode: ProvinceCode.BC, name: "Maple Ridge" },
  { provinceCode: ProvinceCode.BC, name: "Prince George" },
  { provinceCode: ProvinceCode.BC, name: "Castlegar" },
  { provinceCode: ProvinceCode.BC, name: "Merritt" },
  { provinceCode: ProvinceCode.BC, name: "Prince Rupert" },
  { provinceCode: ProvinceCode.BC, name: "Chemainus" },
  { provinceCode: ProvinceCode.BC, name: "Mission" },
  { provinceCode: ProvinceCode.BC, name: "Richmond" },
  { provinceCode: ProvinceCode.BC, name: "Chilliwack" },
  { provinceCode: ProvinceCode.BC, name: "Nanaimo" },
  { provinceCode: ProvinceCode.BC, name: "Saanich" },
  { provinceCode: ProvinceCode.BC, name: "Clearwater" },
  { provinceCode: ProvinceCode.BC, name: "Nelson" },
  { provinceCode: ProvinceCode.BC, name: "Sooke" },
  { provinceCode: ProvinceCode.BC, name: "Colwood" },
  { provinceCode: ProvinceCode.BC, name: "New Westminster" },
  { provinceCode: ProvinceCode.BC, name: "Sparwood" },
  { provinceCode: ProvinceCode.BC, name: "Coquitlam" },
  { provinceCode: ProvinceCode.BC, name: "North Cowichan" },
  { provinceCode: ProvinceCode.BC, name: "Surrey" },
  { provinceCode: ProvinceCode.BC, name: "Cranbrook" },
  { provinceCode: ProvinceCode.BC, name: "North Vancouver" },
  { provinceCode: ProvinceCode.BC, name: "Terrace" },
  { provinceCode: ProvinceCode.BC, name: "Dawson Creek" },
  { provinceCode: ProvinceCode.BC, name: "North Vancouver" },
  { provinceCode: ProvinceCode.BC, name: "Tumbler" },
  { provinceCode: ProvinceCode.BC, name: "Delta" },
  { provinceCode: ProvinceCode.BC, name: "Osoyoos" },
  { provinceCode: ProvinceCode.BC, name: "Vancouver" },
  { provinceCode: ProvinceCode.BC, name: "Fernie" },
  { provinceCode: ProvinceCode.BC, name: "Parksville" },
  { provinceCode: ProvinceCode.BC, name: "Vancouver" },
  { provinceCode: ProvinceCode.BC, name: "Invermere" },
  { provinceCode: ProvinceCode.BC, name: "Peace River" },
  { provinceCode: ProvinceCode.BC, name: "Vernon" },
  { provinceCode: ProvinceCode.BC, name: "Kamloops" },
  { provinceCode: ProvinceCode.BC, name: "Penticton" },
  { provinceCode: ProvinceCode.BC, name: "Victoria" },
  { provinceCode: ProvinceCode.BC, name: "Kaslo" },
  { provinceCode: ProvinceCode.BC, name: "Port Alberni" },
  { provinceCode: ProvinceCode.BC, name: "Whistler" },
  { provinceCode: ProvinceCode.BC, name: "Langley" },
  { provinceCode: ProvinceCode.BC, name: "Port Hardy" },
  { provinceCode: ProvinceCode.MB, name: "Birtle" },
  { provinceCode: ProvinceCode.MB, name: "Flin Flon" },
  { provinceCode: ProvinceCode.MB, name: "Swan River" },
  { provinceCode: ProvinceCode.MB, name: "Brandon" },
  { provinceCode: ProvinceCode.MB, name: "Snow Lake" },
  { provinceCode: ProvinceCode.MB, name: "The Pas" },
  { provinceCode: ProvinceCode.MB, name: "Cranberry Portage" },
  { provinceCode: ProvinceCode.MB, name: "Steinbach" },
  { provinceCode: ProvinceCode.MB, name: "Thompson" },
  { provinceCode: ProvinceCode.MB, name: "Dauphin" },
  { provinceCode: ProvinceCode.MB, name: "Stonewall" },
  { provinceCode: ProvinceCode.MB, name: "Winnipeg" },
];
