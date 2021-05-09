import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sarabjeet Kaur', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sarabjeet Kaur',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/skaur1991/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1_FormValidation_.jpeg',
    title: 'Sign Up Form',
    info: 'Technical Tools Used - HTML5, CSS & JavaScript',
    info2: 'This sign up form is created to perform validation functions such as user name cannot be shorter than 3 characters and bigger than 35 characters. Similarly, phone number should only be 10 digits. Password entered by user wil be validated using regular expression.',
    url: '',
    repo: 'https://github.com/skaur1991/SignUp_FromValidation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2_NoteTakingApp.jpeg',
    title: 'Note Taking App',
    info: 'Techinal Tools Used - HTML5, Bootstrap, JavaScript',
    info2: 'This app is designed to create notes. User can add notes with specific note title. All of the notes created by user will be displayed in body section. User can also delete a note.',
    url: '',
    repo: 'https://github.com/skaur1991/JS_Note_Taking_App_Project1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3_Postman.png',
    title: 'REST API',
    info: 'Technical Tools Used - Node JS, Express, MongoDB, Postman',
    info2: 'This small project is created to demonstrate basically the backend side of the crud operations by using node js, express, mongoDB, in which we can add users data, update data, create and as well as delete data. Postman is used to test all APIs for crud operations ',
    url: '',
    repo: 'https://github.com/skaur1991/REST_API', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'Project4_UserManagementSystem.jpeg',
    title: 'User Management System',
    info: 'Technical Tools Used - Node JS, Express, MongoDB, Postman',
    info2: 'This User Management project is created to demonstrate the use of NodeJs, express and mongoDb to manage different users of a sytem. This applications provides nice user interface along with the functionality to manage users data.',
    url: '',
    repo: 'https://github.com/skaur1991/Usermanagement-System', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sabbykaur754@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/skaur1991',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
