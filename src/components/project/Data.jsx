import mapImg from "../../assets/map.png";
import battleshipImg from "../../assets/battleshipImg.png";
import nosebookImg from "../../assets/nosebook.png";
import blogImg from "../../assets/blog.png";
// import portfolioImg from "../../assets/portfolio.png";
// import cvImg from "../../assets/cvBuilder.png";
// import weatherImg from "../../assets/weatherApp.png";
// import memoryCardImg from "../../assets/memoryCard.png";
// import todoImg from "../../assets/todo.png";

export const projectsData = [
  {
    id: 1,
    image: battleshipImg,
    title: "Battleship",
    description:
      "A Battleship game built using Test-Driven Development (TDD) and Object-Oriented Programming (OOP) principles. Features multiplayer, offering real-time competition, and an intuitive ship placement mechanism using HTML drag and drop.",
    category: ["JavaScript", "NodeJS", "ExpressJS"],
    viewLink: "https://shirshodipto.github.io/battleship",
    codeLink: "https://github.com/ShirshoDipto/battleship",
  },
  {
    id: 2,
    image: nosebookImg,
    title: "NoseBook",
    description:
      "A comprehensive full-stack Facebook clone incorporating essential features of Facebook such as posts, comments, likes, friend requests, real-time notifications and messaging, and more.",
    category: ["React", "Express", "MongoDB", "NodeJS"],
    viewLink: "https://nosebook-social.netlify.app",
    codeLink: "https://github.com/ShirshoDipto/social-media-client",
  },
  {
    id: 3,
    image: mapImg,
    title: "Geopolicy Insight",
    description:
      "An interactive data visualization map built with Mapbox that unveils significant insights about geopolitical affairs. Built for an online institution that teaches international affairs to its students. ",
    category: ["JavaScript"],
    viewLink: "https://shirshodipto.github.io/ustadh-project",
    codeLink: "https://github.com/ShirshoDipto/ustadh-project",
  },
  {
    id: 4,
    image: blogImg,
    description:
      "A full-stack personal blog app for posting my thoughts stories, and ideas.",
    title: "Personal Blog",
    category: ["React", "Express", "NodeJS", "MongoDB"],
    viewLink: "https://shirsho-blog.netlify.app",
    codeLink: "https://github.com/ShirshoDipto/blog-client",
  },
  // {
  //   id: 4,
  //   image: portfolioImg,
  //   title: "Portfolio",
  //   category: ["React"],
  //   description:
  //     "A fully responnsive portfolio website for myself. This one right here. ",
  //   viewLink: "https://shirsho-blog.netlify.app",
  //   codeLink: "https://github.com/ShirshoDipto/portfolio",
  // },
  // {
  //   id: 5,
  //   image: weatherImg,
  //   title: "Weather App",
  //   category: ["JavaScript"],
  //   description:
  //     "A simple weather app where one can view the key weather informations of a city by entering the city name correctly.",
  //   viewLink: "https://shirshodipto.github.io/weather-app",
  //   codeLink: "https://github.com/ShirshoDipto/weather-app",
  // },
  // {
  //   id: 6,
  //   image: todoImg,
  //   title: "To-Do App",
  //   category: ["JavaScript"],
  //   description:
  //     "A fully responsive task manager app built with vanilla JavaScript.",
  //   viewLink: "https://shirshodipto.github.io/todo",
  //   codeLink: "https://github.com/ShirshoDipto/todo",
  // },
  // {
  //   id: 7,
  //   image: cvImg,
  //   title: "CV Builder",
  //   category: ["React"],
  //   description: "A CV/Resume builder app built with React.",
  //   viewLink: "inventory-app-production-809e.up.railway.app",
  //   codeLink: "https://github.com/ShirshoDipto/cv-app",
  // },
  // {
  //   id: 8,
  //   image: memoryCardImg,
  //   title: "Memory Card",
  //   category: ["React"],
  //   description: "A game testing the players' memory. Built with React.",
  //   viewLink: "inventory-app-production-809e.up.railway.app",
  //   codeLink: "https://github.com/ShirshoDipto/memory-vard",
  // },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "NodeJS",
  },
];
