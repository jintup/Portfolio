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
    mongodb,
    git,
    figma,
    starbucks,
    tesla,
    shopify,
    Talkingchalks,
    yoolt,
    Testloom
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
        description:"Its is a TESTING MANAGEMENT APPLICATION using  Nest JS as back-end and Next JS as front-end."
    },
    {
        title: "TalkingChalks",
        image: Talkingchalks,
        description:"Its is a E-LEARNING PLATFORM using Express JS as back-end and Embedded JS as front-end."
    },
    {
        title: "Yoolt",
        image: yoolt,
        description:"Its is a TASK MANAGEMENT AND MEETING PLATFORM using React JS as back-end and Nest JS as front-end."
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
        date: "March 2022 - Present",
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
        title: "SALES EXCUTIVE",
        company_name: "Finance Buddha",
        icon: starbucks,
        iconBg: "#383E56",
        date: "June 2019 - June 2021",
        points: [
            "Generated new leads as a Sales Executive at Finance Buddha",
"            Implemented effective communication and relationship-building strategies to convert leads into sales",
"            Worked closely with customers to gain insights into their financial needs",
"            Provided personalized solutions that aligned with customers' specific requirements"      
],
 },
];

const testimonials = [
    {
        testimonial:
            "I received the best service I could have asked for. My tutor was super professional to deal with and helped me a lot",
        name: "Shyam",
        designation: "Manager",
        company: "ECPL",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];


export { services, technologies, experiences, testimonials, service };