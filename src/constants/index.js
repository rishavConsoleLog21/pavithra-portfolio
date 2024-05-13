import { meta, shopify, starbucks, tesla, icsolution, emertxe } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  pricewise,
  snapgram,
  summiz,
  threads,
} from "../assets/icons";

import cprogramming from "../assets/icons/cprogramming.svg";
import cpp from "../assets/icons/cpp.svg";
import linux from "../assets/icons/linux.svg";
import arduino from "../assets/icons/arduino.svg";
import raspberryPi from "../assets/icons/raspberryPi.svg";
import ds from "../assets/icons/ds.svg";
import algo from "../assets/icons/algorithm.svg";

export const skills = [
  {
    imageUrl: cprogramming,
    name: "C Programming",
    type: "Programming Language",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Programming Language",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "Operating System",
  },
  {
    imageUrl: arduino,
    name: "Arduino",
    type: "Microcontroller",
  },
  {
    imageUrl: raspberryPi,
    name: "Raspberry Pi",
    type: "Mini Computer",
  },
  {
    imageUrl: ds,
    name: "Data Structures",
    type: "Programming",
  },
  {
    imageUrl: algo,
    name: "Algorithms",
    type: "Programming",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Embedded Software Intern",
    company_name: "Emertex",
    icon: emertxe,
    iconBg: "#fbc3bc",
    date: "Nov 2023 - June 2024",
    points: [
      "Developed firmware for embedded systems using C and C++.",
      "Worked on linux systems to develop device drivers and kernel modules.",
      "Optimized code for memory and performance.",
      "Solved complex problems using data structures and algorithms.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IC Solution",
    icon: icsolution,
    iconBg: "#accbe1",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Developed and maintained websites for clients using HTML, CSS, and JavaScript.",
      "Collaborated with designers to create responsive web designs.",
      "Optimized websites for speed and performance.",
      "Conducted code reviews and provided feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
