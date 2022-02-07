import rocket from "./assets/rocket.png";
import bot from "./assets/bot.png";
import optimist from "./assets/optimist.png";
import hnClone from "./assets/hnClone.png";
import react from "./assets/icons/react.png";
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import express from "./assets/icons/express.png";
import node from "./assets/icons/node.png";
import mongodb from "./assets/icons/mongodb.png";
import js from "./assets/icons/js.png";
import mui from "./assets/icons/mui.png";
import bootstrap from "./assets/icons/bootstrap.png";
import sass from "./assets/icons/sass.png";
import postgre from "./assets/icons/postgre.png";
import c from "./assets/icons/c.png";
import git from "./assets/icons/git.png";
import heroku from "./assets/icons/heroku.png";
import netlify from "./assets/icons/netlify.png";
import github from "./assets/icons/github.png";
import npm from "./assets/icons/npm.png";
import trello from "./assets/icons/trello.png";
import scrum from "./assets/icons/scrum.png";

const projects = [
  {
    name: "Discord Backup BOT",
    github: "https://github.com/claurennt/Discord-Backup-BOT",
    image: bot,
  },
  {
    name: "The Rocket Coder",
    github: "https://github.com/claurennt/the_rocket_coder_frontend",
    netlify: "https://the-rocket-coder.netlify.app/",
    image: rocket,
  },
  {
    name: "Merceria Shop (Back-end)",
    github: "https://github.com/claurennt/merceria-shop-backend",
  },
  {
    name: "Expressful Blog (Front-end)",
    github: "https://github.com/claurennt/expressful_blog_frontend",
    netlify: "https://expressful-blog-frontend.netlify.app/home",
    image: optimist,
  },
  {
    name: "Expressful Blog (Back-end)",
    github: "https://github.com/claurennt/expressful_blog_backend/",
    heroku: "https://expressful-blog-backend.herokuapp.com/",
  },
  {
    name: "Small Hacker News Clone",
    github: "https://github.com/claurennt/hacker_news_clone",
    netlify: "https://react-hn-clone-claurennt.netlify.app/",
    image: hnClone,
  },
];

const skills = {
  frontEnd: [
    {
      name: "HTML",
      image: html,
    },
    { name: "CSS", image: css },
    { name: "Sass", image: sass },
    { name: "Bootstrap", image: bootstrap },
    { name: "Material-UI", image: mui },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
  ],
  backEnd: [
    {
      name: "NodeJS",
      image: node,
    },
    { name: "ExpressJS", image: express },
    { name: "PostgreSQL", image: postgre },
    { name: "MongoDB", image: mongodb },
    { name: "mongoose" },
    { name: "C", image: c },
  ],
  tools: [
    { name: "git", image: git },
    { name: "GitHub", image: github },
    { name: "npm", image: npm },
    { name: "Trello", image: trello },
  ],
  deployment: [
    { name: "heroku", image: heroku },
    { name: "netlify", image: netlify },
  ],
  "best practices": [{ name: "Agile/Scrum", image: scrum }],
};
export { projects, skills };
