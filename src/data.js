import rocket from "./assets/rocket.png";
import poke from "./assets/poke.png";
import myfavpodcasts from "./assets/myfavpodcasts.png";
import todo from "./assets/todo.png";
import bot from "./assets/bot.png";
import optimist from "./assets/optimist.png";
import hnClone from "./assets/hnClone.png";
import react from "./assets/icons/react.jp2";
import reactwp from "./assets/icons/react.webp";
import html from "./assets/icons/html.jp2";
import htmlwp from "./assets/icons/html.webp";
import csssvg from "./assets/icons/css3.svg";
import css from "./assets/icons/css.jp2";
import csswp from "./assets/icons/css.webp";
import expresssvg from "./assets/icons/express.svg";
import express from "./assets/icons/express.jp2";
import expresswp from "./assets/icons/express.webp";
import node from "./assets/icons/node.jp2";
import nodewp from "./assets/icons/node.webp";
import mongodb from "./assets/icons/mongodb.jp2";
import mondogbwp from "./assets/icons/mongodb.webp";
import mongoose from "./assets/icons/mongoose-.svg";
import jssvg from "./assets/icons/js.svg";
import js from "./assets/icons/js.jp2";
import jswp from "./assets/icons/js.webp";
import mui from "./assets/icons/mui.jp2";
import muiwp from "./assets/icons/mui.webp";
import bootstrapsvg from "./assets/icons/bootstrap.svg";
import bootstrap from "./assets/icons/bootstrap.jp2";
import bootstrapwp from "./assets/icons/bootstrap.webp";
import sass from "./assets/icons/sass.jp2";
import sasswp from "./assets/icons/sass.webp";
import postgre from "./assets/icons/postgre.jp2";
import postgrewb from "./assets/icons/postgre.webp";
import csvg from "./assets/icons/c.svg";
import c from "./assets/icons/c.jp2";
import cwp from "./assets/icons/c.webp";
import gitsvg from "./assets/icons/git.svg";
import git from "./assets/icons/git.jp2";
import gitwp from "./assets/icons/git.webp";
import heroku from "./assets/icons/heroku.jp2";
import herokuwp from "./assets/icons/heroku.webp";
import netlify from "./assets/icons/netlify.jp2";
import netlifywp from "./assets/icons/netlify.webp";
import githubsvg from "./assets/icons/github.svg";
import github from "./assets/icons/github.jp2";
import githubwp from "./assets/icons/github.webp";
import npm from "./assets/icons/npm.jp2";
import npmwp from "./assets/icons/npm.webp";
import trello from "./assets/icons/trello.jp2";
import trellowp from "./assets/icons/trello.webp";
import scrum from "./assets/icons/scrum.jp2";
import scrumwp from "./assets/icons/scrum.webp";
const projects = [
  {
    name: "Discord Backup BOT",
    github: "https://github.com/claurennt/Discord-Backup-BOT",
    image: bot,
    "built in": "01.2022",
  },
  {
    name: "Merceria Shop (Back-end)",
    github: "https://github.com/claurennt/merceria-shop-backend",
    website: "",
    image: "",
    "built in": "09.2021 - ongoing",
  },
  {
    name: "Pokefight!",
    github: "https://github.com/claurennt/pokefight_front_end",
    website: "https://blissful-mccarthy-be71d3.netlify.app/",
    image: poke,
    "built in": "07.2021",
  },
  {
    name: "The Rocket Coder",
    github: "https://github.com/claurennt/the_rocket_coder_frontend",
    website: "https://the-rocket-coder.netlify.app/",
    image: rocket,
    "built in": "07/08.2021",
  },
  {
    name: "Expressful Blog (Front-end)",
    github: "https://github.com/claurennt/expressful_blog_frontend",
    website: "https://expressful-blog-frontend.netlify.app/home",
    image: optimist,
    "built in": "07.2021",
  },
  {
    name: "Small Hacker News Clone",
    github: "https://github.com/claurennt/hacker_news_clone",
    website: "https://react-hn-clone-claurennt.netlify.app/",
    image: hnClone,
    "built in": "07.2021",
  },
  {
    name: "VanillaJS To-Do List",
    github: "https://github.com/claurennt/to-do-list",
    image: todo,
    "built in:": "05.2021",
  },
  {
    name: "My Favorite Podcasts",
    github: "https://github.com/claurennt/my_favorite_podcasts",
    website: "https://claurennt.github.io/my_favorite_podcasts/index.html",
    image: myfavpodcasts,
    "built when": "04.2021",
  },
];

const skills = {
  frontEnd: [
    {
      name: "HTML",
      jp2: html,
      webP: htmlwp,
    },
    { name: "CSS", image: csssvg, jp2: css, webP: csswp },
    { name: "Sass", jp2: sass, webP: sasswp },
    {
      name: "Bootstrap",
      image: bootstrapsvg,
      jp2: bootstrap,
      webP: bootstrapwp,
    },
    { name: "Material-UI", jp2: mui, webP: muiwp },
    { name: "JavaScript", image: jssvg, jp2: js, webP: jswp },
    { name: "React", jp2: react, webP: reactwp },
  ],
  backEnd: [
    {
      name: "NodeJS",
      jp2: node,
      webP: nodewp,
    },
    { name: "ExpressJS", image: expresssvg, jp2: express, webP: expresswp },
    { name: "PostgreSQL", jp2: postgre, webP: postgrewb },
    { name: "MongoDB", jp2: mongodb, webP: mondogbwp },
    { name: "mongoose", image: mongoose },
    { name: "C", image: csvg, jp2: c, webP: cwp },
  ],
  tools: [
    { name: "git", image: gitsvg, jp2: git, webP: gitwp },
    { name: "GitHub", image: githubsvg, jp2: github, webP: githubwp },
    { name: "npm", jp2: npm, webP: npmwp },
    { name: "Trello", jp2: trello, webP: trellowp },
  ],
  deployment: [
    { name: "heroku", jp2: heroku, webP: herokuwp },
    { name: "netlify", jp2: netlify, webP: netlifywp },
  ],
  "best practices": [{ name: "Agile/Scrum", jp2: scrum, webP: scrumwp }],
};
export { projects, skills };
