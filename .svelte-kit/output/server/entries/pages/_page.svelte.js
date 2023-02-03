import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../chunks/index.js";
const resume = {
  profile: {
    name: "Muhtalip",
    surname: "Dede",
    title: "Software Engineer",
    location: {
      city: "Kartal, Istanbul",
      country: "Turkey"
    },
    age: 27,
    aboutme: "I am a software engineer. I have more than 5 years of total experience. I graduated from Yıldız Technical University, Department of Mathematics Engineering in 2018. Lastly, I worked as a Founding Engineer in the founding team of Datapad for about 1 year. I worked as a Senior Software Engineer at Dogus Technology before Datapad. As a technology stack, I work on frontend (eg VueJS), mobile technologies (eg React Native), backend technologies (eg NodeJS, C#, Python etc.) and frequently development operations (Kubernetes, Docker etc.) stacks. All the projects I have worked on so far are cloud-based technologies (eg AWS, GCP, Microsoft Azure, Openshift) and generally these projects are projects with microservice architecture. I have personally been interested in subjects such as open source code, artificial intelligence, image processing, internet of things since I was studying at university.",
    email: "muhtalipdede@gmail.com",
    phone: "+90 538 8590990"
  },
  social: {
    twitter: "https://twitter.com/MuhtalipDede",
    linkedin: "https://www.linkedin.com/in/muhtalipdede/",
    github: "https://github.com/muhtalipdede",
    medium: "https://muhtalipdede.medium.com/",
    website: "https://muhtalip.com"
  },
  experiences: [
    {
      company: "Datapad",
      position: "Founding Engineer",
      start: "Jan 2022",
      end: "Nov 2022"
    },
    {
      company: "Dogus Technology",
      position: "Senior Software Developer",
      start: "Jul 2017",
      end: "Jan 2022"
    },
    {
      company: "Halkbank",
      position: "Software Development Intern",
      start: "Jun 2016",
      end: "Jul 2016"
    }
  ],
  educations: [
    {
      school: "Yıldız Technical University",
      department: "Department of Mathematical Engineering",
      description: "3.02/4.00 GPA - Honor Student",
      start: "2014",
      end: "2018"
    },
    {
      school: "Yıldız Technical University",
      department: "Foreign Language Preparatory School",
      description: "",
      start: "2013",
      end: "2014"
    }
  ],
  projects: [
    {
      name: "Datapad Mobile App",
      company: "Datapad",
      description: "This project is a mobile application project. Users can follow their data daily by using many sources. These resources include Google Sheets, Facebook Ads, SQL, Google Analytics, Shopify, Stripe, Hotspot etc. integrations such as Mobile notifications are sent to the user as the data is updated. At the same time, users can follow the data together by adding their teammates to the workspace.",
      stacks: [
        "React Native",
        "NodeJS",
        "Deno",
        "NextJS",
        "MongoDB",
        "AWS",
        "Pulumi",
        "Argo Workflows",
        "GCP",
        "Docker",
        "Kubernetes",
        "Google Sheets Api",
        "Facebook Ads Api",
        "Shopify Api",
        "Firebase",
        "Microservices",
        "Lambda Functions"
      ]
    },
    {
      name: "Petimle Mobile App && Petimle Vet Mobile App For Veterinarians",
      company: "Dogus Technology",
      description: "This app is for pet owners. This application is an application where pets can follow their health information. With this application, pet owners can talk to veterinarians instantly. In this application, users can follow the vaccine. A similar application has been developed for veterinarians.",
      stacks: [
        "React Native",
        "Firebase",
        "GCP",
        "PubSub",
        "Cloud Functions",
        "Firestore"
      ]
    },
    {
      name: "Vosvos Restful Api",
      company: "Dogus Technology",
      description: "This application is a web service. Users apply for automotive loan. After the application is completed, the loan gets approval or rejection status according to the user's information. Some users get manual confirmation status. Users with manual status contact the company.",
      stacks: [
        "dotnet Core",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Docker",
        "Kubernetes",
        "GCP",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Microservices"
      ]
    },
    {
      name: "Yazı Tura ML Project",
      company: "Dogus Technology",
      description: "this project is a machine learning project. This project estimates the daily money transfer amount and sends an e-mail to the users. The more consistent the daily money transfer forecast, the less loss the company will suffer.",
      stacks: [
        "Python",
        "Jupyter Notebook",
        "Google Colab",
        "Docker",
        "Kubernetes",
        "GCP",
        "Flask"
      ]
    },
    {
      name: "Radar Web App && Radar Restful Api",
      company: "Dogus Technology",
      description: "This project is a form of the Thoughtworks Radar project. It was developed for Dogus Technology company. As an extra, backend service has been added for dynamic data.",
      stacks: [
        "D3",
        "NodeJS",
        "Express",
        "MongoDB",
        "Docker",
        "Netlify",
        "Firebase"
      ]
    },
    {
      name: "Spark | Zebra Project",
      company: "Dogus Technology",
      description: "This project is a transformation project. The old system has been redeveloped using new technologies. At the same time, new features have been added. The application is a credit entry application. Dealers use. At the same time, they can track the credits entered.",
      stacks: [
        "VueJS",
        "dotnet Core",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Docker",
        "Kubernetes",
        "GCP",
        "Openshift",
        "Microservices",
        "Redis",
        "PostgreSQL",
        "PugJS",
        "Sass",
        "Bootstrap",
        "RabbitMQ",
        "Elasticsearch",
        "Kibana"
      ]
    },
    {
      name: "e-Contract Web App",
      company: "Dogus Technology",
      description: "This application is an online contract application. Users read and approve agreements online.",
      stacks: [
        "VueJS",
        "dotnet Core",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Docker",
        "Kubernetes",
        "GCP",
        "Openshift",
        "Microservices",
        "Redis",
        "PostgreSQL",
        "PugJS",
        "Sass",
        "Bootstrap",
        "RabbitMQ",
        "Elasticsearch",
        "Kibana"
      ]
    },
    {
      name: "Agrega Project",
      company: "Dogus Technology",
      description: "This app is a conversion app. This application is a CMS application. The current application has been redeveloped using new technologies. New modules have been added. These are offer module, risk module etc.",
      stacks: [
        "VueJS",
        "dotnet Core",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Docker",
        "Kubernetes",
        "GCP",
        "Openshift",
        "Microservices",
        "Redis",
        "PostgreSQL",
        "PugJS",
        "Sass",
        "Bootstrap",
        "RabbitMQ",
        "Elasticsearch",
        "Kibana"
      ]
    },
    {
      name: "S-Fever | ASU IoT Project",
      company: "Yıldız Technical University",
      description: "This project is the internet of things project. There is a device. Several sensors have been added to this device. eg HCSR04, Panasonic AMG8833 etc. Raspberry Pi single board computer is used for this device. The data obtained from the sensors is sent to the main server. The main server collects this data. A calibration process is performed on the server. Machine learning methods were used for the calibration process. Users view the relevant device data instantly via the mobile application. Alarms are generated for emergencies.",
      stacks: [
        "Python",
        "Java",
        "JSP",
        "Android",
        "Raspberry Pi",
        "XAMP",
        "MySQL",
        "Apache Tomcat",
        "Backpropagation",
        "AMG8833",
        "HCSR04",
        "DHT11"
      ]
    }
  ],
  awards: [
    {
      name: "Patent",
      description: "S-Fever | Body Temperature Monitoring System",
      url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/sonuc/dosya?patentAppNo=2019%2F07825&documentsTpye=all"
    },
    {
      name: "Golden Medal ISIF 2020",
      description: "Istanbul International Invention Fair",
      url: "http://www.istanbul-inventions.org/tr/42439/ISIF20-SONUCLAR"
    },
    {
      name: "Gelecege Iz Bırakanlar - 2019",
      description: "Dogus Technology",
      url: ""
    },
    {
      name: "Gelecege Iz Bırakanlar - 2018",
      description: "Dogus Technology",
      url: ""
    },
    {
      name: "2209A - 2018",
      description: "Tubitak",
      url: ""
    }
  ],
  languages: [
    {
      name: "English"
    }
  ]
};
const Social_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".social.svelte-y2x8bt>div.svelte-y2x8bt>a.svelte-y2x8bt{align-items:center;justify-content:center;font-size:1rem;font-weight:300;color:#000;text-decoration:none;margin:5px}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const social = resume.social;
  $$result.css.add(css$6);
  return `<div class="${"social svelte-y2x8bt"}"><div class="${"svelte-y2x8bt"}"><a${add_attribute("href", social.twitter, 0)} class="${"svelte-y2x8bt"}">Twitter</a>
    <a${add_attribute("href", social.linkedin, 0)} class="${"svelte-y2x8bt"}">LinkedIn</a>
    <a${add_attribute("href", social.github, 0)} class="${"svelte-y2x8bt"}">GitHub</a>
    <a${add_attribute("href", social.medium, 0)} class="${"svelte-y2x8bt"}">Medium</a>
    <a${add_attribute("href", social.website, 0)} class="${"svelte-y2x8bt"}">Website</a></div>
</div>`;
});
const photo = "/_app/immutable/assets/profile-fb81685d.jpeg";
const Profile_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".profile__image__container.svelte-17kuqic.svelte-17kuqic{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:0.9rem;font-weight:300;margin-top:20px;text-align:justify}.profile__image.svelte-17kuqic.svelte-17kuqic{width:200px;height:200px;border-radius:50%;object-fit:cover;object-position:center}.profile__image__container.svelte-17kuqic span a.svelte-17kuqic{color:#000;text-decoration:none}@media(max-width: 768px){.profile__image.svelte-17kuqic.svelte-17kuqic{width:150px;height:150px}}@media(max-width: 480px){.profile__image.svelte-17kuqic.svelte-17kuqic{width:100px;height:100px}}@media(max-width: 320px){.profile__image.svelte-17kuqic.svelte-17kuqic{width:80px;height:80px}}.profile.svelte-17kuqic.svelte-17kuqic{display:flex;flex-direction:row}.profile__info__container.svelte-17kuqic.svelte-17kuqic{display:flex;flex-direction:column;margin-top:3rem}.profile__info__name.svelte-17kuqic.svelte-17kuqic{font-weight:bold;font-size:2rem;font-weight:700;text-align:center}.profile__info__aboutme.svelte-17kuqic.svelte-17kuqic{font-size:0.9rem;font-weight:300;margin-top:20px;text-align:justify}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const profile = resume.profile;
  const social = resume.social;
  $$result.css.add(css$5);
  return `<div class="${"profile__image__container svelte-17kuqic"}">
  
  <img class="${"profile__image svelte-17kuqic"}"${add_attribute("src", photo, 0)}>
  <span>Age: ${escape(profile.age)}</span>
  <span><a href="${"mailto:" + escape(profile.email, true)}" class="${"svelte-17kuqic"}">${escape(profile.email)}</a></span>
  <span><a href="${"tel:" + escape(profile.phone, true)}" class="${"svelte-17kuqic"}">${escape(profile.phone)}</a></span>
  <span>${escape(profile.location.city)} ${escape(profile.location.country)}</span>
  ${validate_component(Social, "Social").$$render($$result, { social }, {}, {})}</div>

<div class="${"profile svelte-17kuqic"}"><div class="${"profile__info__container svelte-17kuqic"}"><span class="${"profile__info__name svelte-17kuqic"}">${escape(profile.name)}
      ${escape(profile.surname)} | ${escape(profile.title)}</span>
    <span class="${"profile__info__aboutme svelte-17kuqic"}">${escape(profile.aboutme)}</span></div>
</div>`;
});
const Experience_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".experience__title.svelte-1ad379v.svelte-1ad379v.svelte-1ad379v{font-size:1.2rem;font-weight:600;text-align:justify;width:100%}.experience.svelte-1ad379v.svelte-1ad379v.svelte-1ad379v{display:flex;flex-direction:column;width:100%}.experience__item.svelte-1ad379v.svelte-1ad379v.svelte-1ad379v{display:flex;flex-direction:column}.experience.svelte-1ad379v>div.svelte-1ad379v>.title.svelte-1ad379v{font-size:1rem;font-weight:400;margin-top:5px;text-align:justify}.experience.svelte-1ad379v>div.svelte-1ad379v>.date.svelte-1ad379v{font-size:0.9rem;font-weight:300;text-align:justify}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const experience = resume.experiences;
  $$result.css.add(css$4);
  return `<div class="${"experience__title svelte-1ad379v"}">Experiences</div>
<div class="${"experience svelte-1ad379v"}"><div class="${"experience__item svelte-1ad379v"}">${each(experience, (item) => {
    return `<span class="${"title svelte-1ad379v"}">${escape(item.company)} - ${escape(item.position)}</span>
      <span class="${"date svelte-1ad379v"}">${escape(item.start)} - ${escape(item.end)}</span>`;
  })}</div>
</div>`;
});
const Education_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".education__title.svelte-2jyhsz{font-size:1.2rem;font-weight:600;text-align:justify;width:100%}.education.svelte-2jyhsz{display:flex;flex-direction:column}.education__item.svelte-2jyhsz{display:flex;flex-direction:column;margin-top:1rem}.title.svelte-2jyhsz{font-size:1rem;font-weight:400;margin-top:5px;text-align:justify;margin-top:1rem}.description.svelte-2jyhsz{font-size:0.9rem;font-weight:300;text-align:justify}.date.svelte-2jyhsz{font-size:0.9rem;font-weight:300;text-align:justify}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const education = resume.educations;
  $$result.css.add(css$3);
  return `<div class="${"education__title svelte-2jyhsz"}">Education</div>

<div class="${"education svelte-2jyhsz"}"><div class="${"education__item svelte-2jyhsz"}">${each(education, (item) => {
    return `<span class="${"title svelte-2jyhsz"}">${escape(item.school)} - ${escape(item.department)}</span>
      <span class="${"description svelte-2jyhsz"}">${escape(item.description)}</span>
      <span class="${"date svelte-2jyhsz"}">${escape(item.start)} - ${escape(item.end)}</span>`;
  })}</div>
</div>`;
});
const Award_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".award__title.svelte-1hjd3ri.svelte-1hjd3ri.svelte-1hjd3ri.svelte-1hjd3ri{font-size:1.2rem;font-weight:600;text-align:justify;width:100%}.award.svelte-1hjd3ri.svelte-1hjd3ri.svelte-1hjd3ri.svelte-1hjd3ri{display:flex;flex-direction:column}.award.svelte-1hjd3ri>div.svelte-1hjd3ri.svelte-1hjd3ri.svelte-1hjd3ri{padding:1rem 0}.award.svelte-1hjd3ri>div.svelte-1hjd3ri>a.svelte-1hjd3ri.svelte-1hjd3ri{font-size:1rem;font-weight:400;margin-top:5px;text-align:justify;color:#000;text-decoration:none}.award.svelte-1hjd3ri>div.svelte-1hjd3ri>a.svelte-1hjd3ri>span.svelte-1hjd3ri{font-size:1rem;font-weight:300;margin-top:5px;text-align:justify}",
  map: null
};
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const awards = resume.awards;
  $$result.css.add(css$2);
  return `<div class="${"award__title svelte-1hjd3ri"}">Awards</div>
<div class="${"award svelte-1hjd3ri"}">${each(awards, (award) => {
    return `<div class="${"svelte-1hjd3ri"}"><a${add_attribute("href", award.url, 0)} class="${"svelte-1hjd3ri"}"><span class="${"svelte-1hjd3ri"}">${escape(award.name)} | ${escape(award.description)}</span></a>
    </div>`;
  })}
</div>`;
});
const Language_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".language__title.svelte-1wgp9rm.svelte-1wgp9rm.svelte-1wgp9rm{font-size:1.2rem;font-weight:600;text-align:justify;width:100%}.language.svelte-1wgp9rm.svelte-1wgp9rm.svelte-1wgp9rm{display:flex;flex-direction:column}.language__item.svelte-1wgp9rm.svelte-1wgp9rm.svelte-1wgp9rm{display:flex;flex-direction:column}.language.svelte-1wgp9rm>div.svelte-1wgp9rm>.title.svelte-1wgp9rm{font-size:1rem;font-weight:400;text-align:justify;margin-top:5px}",
  map: null
};
const Language = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const languages = resume.languages;
  $$result.css.add(css$1);
  return `<div class="${"language__title svelte-1wgp9rm"}">Languages</div>
<div class="${"language svelte-1wgp9rm"}"><div class="${"language__item svelte-1wgp9rm"}">${each(languages, (language) => {
    return `<span class="${"title svelte-1wgp9rm"}">${escape(language.name)}</span>`;
  })}</div>
</div>`;
});
const Project_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project__title.svelte-39gpqy{font-size:1.2rem;font-weight:600;text-align:justify;width:100%}.project.svelte-39gpqy{display:flex;flex-direction:column}.project__container.svelte-39gpqy{margin-top:1rem;display:flex;flex-direction:column}.title.svelte-39gpqy{font-size:1rem;font-weight:400;text-align:justify;margin-top:3rem}.description.svelte-39gpqy{font-size:0.9rem;font-weight:300;text-align:justify;margin-top:1rem}.stack__container.svelte-39gpqy{display:flex;flex-wrap:wrap;margin-top:1rem}.stack.svelte-39gpqy{font-size:0.9rem;font-weight:300;text-align:justify;margin:5px;padding:5px;border:1px solid #000;border-radius:5px}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = resume.projects;
  $$result.css.add(css);
  return `<div class="${"project__title svelte-39gpqy"}">Projects</div>
<div class="${"project svelte-39gpqy"}"><div class="${"project__container svelte-39gpqy"}">${each(projects, (project) => {
    return `<span class="${"title svelte-39gpqy"}">${escape(project.name)} | ${escape(project.company)}</span>
      <span class="${"description svelte-39gpqy"}">${escape(project.description)}</span>
      <div class="${"stack__container svelte-39gpqy"}">${each(project.stacks, (stack) => {
      return `<span class="${"stack svelte-39gpqy"}">${escape("#" + stack)}</span>`;
    })}
      </div>`;
  })}</div>
</div>`;
});
const Spacer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 1 } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<div class="${"spacer"}" style="${"height: " + escape(height, true) + "rem;"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, { height: 2 }, {}, {})}
${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, { height: 2 }, {}, {})}
${validate_component(Project, "Project").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, { height: 2 }, {}, {})}
${validate_component(Education, "Education").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, { height: 2 }, {}, {})}
${validate_component(Language, "Language").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, { height: 2 }, {}, {})}
${validate_component(Award, "Award").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
