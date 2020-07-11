import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jayaprakash | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jayaprakash',
  subtitle: "I'm Frontend Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am a professional Front-End Web Developer based in Chennai,India. I have a passion for creating beautiful web applications.',
  paragraphTwo: 'I use Javascript, React, Redux and Node to create a Performant UI.',
  paragraphThree: "I love watching movies and reading books.Well that's pretty much about me",
  resume: 'https://drive.google.com/file/d/1tqi71_TqSErbHO3AmgCPBvgZ7If7Atiy/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://github.com/jpelaa/guidance-task/blob/master/src/assets/images/2.png',
    title: 'Dynamic Sheet Generator',
    info:
      'React js,Native HTML drag and drop,Used local Storage for caching,Used Context for global store',
    info2: '',
    url: '',
    repo: 'https://github.com/jpelaa/guidance-task', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://github.com/jpelaa/agileboard/blob/master/src/assets/sprintboard.png',
    title: 'Agilify',
    info:
      'Agilify is simple agile dashboard to monitor our stories Agilify. Project name: Agilify Description: This is a tool designed and developed to enable an Agile team to manage the task at every step. The Tool provides different types of logins for the Scrum Master and Team members.',
    info2: '',
    url: '',
    repo: 'https://github.com/jpelaa/agileboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jpelaa1991994@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Jpelaa',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jpelaa',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jayaprakash-elavarasan-8b42a9a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jpelaa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
