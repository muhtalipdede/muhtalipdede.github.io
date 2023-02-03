import type Award from "./award";
import type Education from "./education";
import type Experience from "./experience";
import type Language from "./language";
import type Profile from "./profile";
import type Project from "./project";
import type Social from "./social";

export default interface User {
  profile: Profile;
  social: Social;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  awards: Award[];
  languages: Language[];
}
