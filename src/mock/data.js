import uuidv1 from 'uuid/v1';
import { faReact, faNode, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

// HEAD DATA
export const headData = {
  title: 'Bassam Kazemi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Bassam Kazemi, Full Stack Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bassam',
  subtitle: "I'm a Front End Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Studied Civil Engineering with a specialization in Transportation Planning. Working on Mathematical Optimization Algorithms for my Master thesis made me obsessed with coding which became the turning point of my life.',
  paragraphTwo:
    'chose Web Development as the way to go, and So far learned two stacks, including MERN and SERN, and striving to provide a diverse skill-set and knowledge cause I am ever eager to learn and work out of my comfort zone.',
  paragraphThree: 'Technical Skills:',
  skills: [
    {
      id: uuidv1(),
      name: faReact,
      url: 'https://reactjs.org/',
    },
    {
      id: uuidv1(),
      name: faNode,
      url: 'https://nodejs.org/en/',
    },
    {
      id: uuidv1(),
      name: faJs,
      url: 'https://www.javascript.com/',
    },
    {
      id: uuidv1(),
      name: faHtml5,
      url: 'https://www.w3.org/',
    },
    {
      id: uuidv1(),
      name: faCss3,
      url: 'https://www.w3.org/',
    },
  ],
  resume:
    'https://app.enhancv.com/share/8dcf41bb?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'saducci.png',
    title: 'Saducci Store',
    info: 'An e-commerce progressive web application similar to Shopify but built from scratch',
    info2: 'Technologies used:',
    technologies: [
      'React.js',
      'Express.js',
      'Node.js',
      'Google Cloud Firestore',
      'Firebase Authentication',
      'SASS',
      'Stripe API',
    ],
    url: 'https://saducci-store.herokuapp.com',
    repo: 'https://github.com/bassamkdev/saducci-store', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartbrain.png',
    title: 'Smart Brain',
    info:
      'A single-page web application integrated with Clarifi API as the smart brain of the app to detect faces in images uploaded by authenticated users',
    info2: 'Technologies used:',
    technologies: [
      'React.js',
      'Express.js',
      'PostgreSQL',
      'Node.js',
      'Redis',
      'aws Lambda',
      'aws S3',
      'Docker',
    ],
    url: 'https://smartbrain-ultimate.herokuapp.com',
    repo: 'https://github.com/bassamkdev/smart-brain-frontend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'RoboFriends PWA',
    info:
      'A Game like Progressive web application enabling users to make friends with robots by searching their name. wrote unit tests and snapshot tests for functional components, stateful components, Redux actions, and Redux reducers',
    info2: 'Technologies used:',
    technologies: ['React.js', 'Redux', 'Thunk Middleware', 'Jest', 'Enzyme'],
    url: 'https://bassamkdev.github.io/robo-friends/',
    repo: 'https://github.com/bassamkdev/robo-friends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' Always looking to collaborate with great people and solve challenging problems',
  btn: '',
  email: 'bassamkazemi.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bassam-kazemi/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/bassamkdev',
    },
  ],
};
