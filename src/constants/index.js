import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  creart,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // gallery,
  // tripguide,
  threejs,
  postman,
  technomark,
  perfectmatch,
  bootstrap,
  armanali,
  kirtanhadwani,
  ronakrajput,
  // hotstar,
  reading,
  programming,
  sketching,
  music,
  foodordering,
  expensetracker,
  todo,
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
    title: "Learning",
    icon: reading,
  },
  {
    title: "Coding",
    icon: programming,
  },
  {
    title: "Worship",
    icon: sketching,
  },
  {
    title: "Music",
    icon: music,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Boostrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "ReactJS Internship",
    company_name: "TechnoMark Solution LLP",
    icon: technomark,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Running",
    points: [
      "Developing and maintaining web applications using React.js and integrated with backback using Node.js and other related technologies.",
      "Collaborating with Backend teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Internship",
    company_name: "VNurture Solutions",
    icon: creart,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Developed News App that displays live news. This was the first application.",
      "Created Portfolio website in ReactJS.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a matrimony website as beautiful as our requirement in Figma product, but they proved me wrong.",
    name: "Arman Ali",
    designation: "Backend Developer",
    company: "Pecific Group Of Companies",
    image: armanali,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ganpat does and working with him was amazing experience for me",
    name: "Kirtan Hadwani",
    designation: "Front-End Developer",
    company: "TechnoMark Solution LLP",
    image: kirtanhadwani,
  },

];

const projects = [
  {
    name: " Perfect Match",
    description:
      "Web-based Matrimonial platform that allows users to search about other profiles  and manage their own profile from various interested people to view, providing a convenient and efficient solution for marriage needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: perfectmatch,
    source_code_link: "https://github.com/Ganpat6070/Team-project",
  },
  {
    name: "Food Ordering App",
    description:
      "Food Ordering React js Web Application Build with Firebase, CSS and React, Interactive interface with batter experience. user can pick up many dishes from menu and order them in desired quantity after adding food into cart user need to fill delievery info form",
    tags: [
      {
        name: "reducer",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: foodordering,
    source_code_link: "https://ganpat6070.github.io/FoodOrderApp/",
  },

  {
    name: "Expense Tracker App",
    description:
      "A Expense Tracker Font End website made with HTML, CSS and React js, Interactive interface with animation and charts for proving user batter experience. An expense tracker app allows you to monitor and categorize your expenses",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://ganpat6070.github.io/ExpenseTracker/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
