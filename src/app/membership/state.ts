// import { cities } from "./state";
type State = {
  name: string;
  cities: string[];
};

type Cities = {
  [key: string]: string[];
};

export const states: State[] = [
  {
    name: "Abia",
    cities: ["Aba", "Umuahia", "Arochukwu", "Ohafia"],
  },
  {
    name: "Adamawa",
    cities: ["Yola", "Mubi", "Ganye", "Numan"],
  },
  {
    name: "Akwa Ibom",
    cities: ["Uyo", "Ikot Ekpene", "Eket", "Oron"],
  },
  {
    name: "Lagos",
    cities: ["Lagos", "Ikeja", "Badagry", "Epe", "Ajah"],
  },
];

export const cities: Record<string, string[]> = {};
states.forEach((state) => {
  cities[state.name] = state.cities;
});
