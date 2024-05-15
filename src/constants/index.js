import { icsolution, emertxe, HackerRank } from "../assets/images";
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
  snapgram,
  summiz,
  threads,
  bash,
  cprogramming,
  cpp,
  linux,
  arduino,
  raspberryPi,
  ds,
  algo,
  asm
} from "../assets/icons";

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
    imageUrl: bash,
    name: "Bash Scripting",
    type: "Scripting Language",
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
    imageUrl: asm,
    name: "Assembly Language",
    type: "Programming Language",
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
    title: "Apprentice - Embedded Software Intern",
    company_name: "Emertex",
    icon: emertxe,
    iconBg: "#fbc3bc",
    date: "Jan 2024 - July 2024",
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
    date: "Aug 2022 - Sep 2022",
    points: [
      "Developed and maintained websites for clients using HTML, CSS, and JavaScript.",
      "Collaborated with designers to create responsive web designs.",
      "Optimized websites for speed and performance.",
      "Conducted code reviews and provided feedback to other developers.",
    ],
  },
];

export const achievements = [
  {
    title: "Student Spot Award - C Programming Module",
    company_name: "Emertex",
    icon: emertxe,
    iconBg: "#fbc3bc",
    date: "14 May 2024",
    points: [
      "Awarded for outstanding performance and excellence",
      "in the C programming module as part of the professional certification program.",
    ],
  },
  {
    title: "4-star silver badge in C Programming",
    company_name: "HackerRank",
    icon: HackerRank,
    iconBg: "#accbe1",
    date: "May 2024",
    points: [
      "Awarded for solving problems in C programming.",
      "The badge is awarded for solving problems in the C programming language.",
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
    link: "https://github.com/pavithracr1111",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/pavithracr1111/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "LSB of Steganography",
    description:
      "LSB Image Steganography is a C command-line application enabling seamless embedding of text messages into bitmap (.bmp) images using LSB steganography. Users can encrypt and decrypt messages, validate message and image size compatibility, and optionally include a magic string for identification.",
    link: "https://github.com/pavithracr1111/Pavithra_C_R___STEGO_Project",
  },
  {
    iconUrl: estate,
    theme: "btn-back-red",
    name: "Home Automation using 8051",
    description:
      "Home automation system using 8051 microcontroller and various sensors to control home appliances.The system can be controlled using a mobile app.",
    link: "https://github.com/pavithracr1111",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Garbage Level Monitoring System using Raspberry Pi",
    description:
      "Garbage level monitoring system using Raspberry Pi and ultrasonic sensors to monitor the garbage level in dustbins and send alerts to the authorities when the dustbin is full.",
    link: "https://github.com/pavithracr1111",
  },
  {
    iconUrl: car,
    theme: "btn-back-green",
    name: "Smart EV Charging and Parking Using Embedded Systems",
    description:
      "Smart parking system using 8051 microcontroller and Arduino to monitor the parking slots and book the slots using a web app.",
    link: "https://github.com/rishavConsoleLog21/Smart-EV-Charging-Parking-Station",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "Event Web App",
    description:
      "Web app to manage events and send invites to the users. The app is built using HTML, CSS, and JavaScript. The app has features like creating events, sending invites, and managing the events.",
    link: "https://github.com/pavithracr1111/Internship-Project",
  },
];
