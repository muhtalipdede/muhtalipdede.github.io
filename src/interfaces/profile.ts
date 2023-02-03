import type Location from "./location";

export default interface Profile {
  name: string;
  surname: string;
  title: string;
  location: Location;
  age: number;
  aboutme: string;
  email: string;
  phone: string;
}
