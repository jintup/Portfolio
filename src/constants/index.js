import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  nestjs,
  nextjs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  Talky,
  Talkingchalks,
  yoolt,
  Testloom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const service = [
  {
    title: "TestLoom",
    image: Testloom,
    description:
      "Its is a TESTING MANAGEMENT APPLICATION using  Nest JS as back-end and Next JS as front-end.",
  },
  {
    title: "Talky App",
    image: Talky,
    description:
      "Its is a E-LEARNING  Mobile Application using Express JS as back-end and React native as front-end.",
  },
  {
    title: "Yoolt",
    image: yoolt,
    description:
      "Its is a TASK MANAGEMENT AND MEETING PLATFORM using React JS as front-end and Nest JS as back-end.",
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ElsysLabs",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Responsible for developing and maintaining web and mobile applications",
      "Worked with other developers and stakeholders",
      "Ensured applications met business requirements",
      "Aimed for a seamless user experience",
      "Developed clean, efficient, and reusable code",
      "Addressed debugging and troubleshooting issues during development",
      "Utilized tools such as Git and Bitbucket for task and project management",
      "Stayed up-to-date with the latest trends and best practices in React and React Native development",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "ElsysLabs",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2022 - 2023",
    points: [
      "Developed and maintained mobile applications using React Native.",
      "Collaborated with other developers and stakeholders for project success",
      "Ensured mobile applications met business requirements effectively",
      "Strived for a seamless user experience in application design",
      "Wrote clean, efficient, and reusable code for optimal performance.",
      "Addressed debugging and troubleshooting issues during the development phase",
      "Utilized tools such as Git and Bitbucket for task and project management",
      "Stayed up-to-date with the latest trends and best practices in React and React Native development",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I received the best service I could have asked for. My tutor was super professional to deal with and helped me a lot",
    name: "Devid",
    designation: "Manager",
    company: "ECPL",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export { services, technologies, experiences, testimonials, service };
