import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  wade,
  nick,
  github,
  summerofcode,
  peppercornlabs,
  zebrista,
  cakesoft,
  arpit,
  mysql,
  kubernetes,
  aws,
  digitalocean,
  helm,
  neovim,
  firebase,
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
  {
    title: "Podcast Creator",
    icon: creator,
  },
];

const technologies = [
  {
    title: "Web Technologies",
    items: [
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
        name: "Node JS",
        icon: nodejs,
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "Kubernetes",
        icon: kubernetes,
      },
      {
        name: "Helm",
        icon: helm,
      },
      {
        name: "Github Actions",
        icon: github,
      },
    ],
  },
  {
    title: "Clouds",
    items: [
      {
        name: "AWS",
        icon: aws,
      },
      {
        name: "Digital Ocean",
        icon: digitalocean,
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        name: "Neo Vim",
        icon: neovim,
      },
      {
        name: "Git",
        icon: git,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
  },
];

const experiences = [
  {
    title: "Technical Lead (Zebrista.com)",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: zebrista,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Present",
    points: [
      "Led the product development of 'SalesJarvis.ai' later rebranded to 'Zebrista'.",
      "Designed the architecture of the product along with the CTO.",
      "Built a multi-tenant architecture for the product.",
      "Built a scalable scraping engine using Puppeteer and deployed using Kubernetes jobs.",
      "Helped a team of 4 developers to build the product.",
      "Worked on the agile model to deliver the product on time.",
      "Interviewed and hired new interns for the team.",
      "Deployed the project using Kubernetes Helm and Docker on Digital Ocean.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: cakesoft,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Helped many startups to build their first MVPs using wide range of technologies.",
      "Developed an electron-react based data transfer application named 'ArtistAnywhere' for ReDesignGroup.",
      "Used React and Redux to build the UI.",
      "Integrated a go binary in the electron app to transfer data at a very high speed, and reliably (rclone).",
      "Developed a PHP based assessment platform 'assesment.cakesofttech.com' to conduct online MCQ rounds for hiring.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: cakesoft,
    iconBg: "#383E56",
    date: "July 2020 - March 2021",
    points: [
      "Worked on a crypto wallet mobile app named 'SACWallet' based on Dart and backend on a node server.",
    ],
  },
  {
    title: "React.js Developer Intern",
    company_name: "Google Summer of Code '2020 - CCExtractor",
    icon: summerofcode,
    iconBg: "#E6DEDD",
    date: "May 2020 - Aug 2020",
    points: [
      "This project aims to bring cloud-native functionality to rclone.",
      "The main motive is to allow a user to do tasks such as document editing and photo editing directly from the GUI without having the restriction of being locked-in to a service like Google Drive.",
      "Created a platform for other developers to build their own plugins and add them to the rclone webui.",
    ],
    links: [
      {
        icon: github,
        name: "GitHub Link",
        link: "https://github.com/rclone/rclone-webui-react",
      },
      {
        icon: summerofcode,
        name: "Completion Certificate",
        link: "https://summerofcode.withgoogle.com/archive/2020/projects/6358944873709568",
      },
    ],
  },
  {
    title: "React.js Developer Intern",
    company_name: "Google Summer of Code '2019 - CCExtractor",
    icon: summerofcode,
    iconBg: "#E6DEDD",
    date: "May 2019 - Aug 2019",
    points: [
      "The project works on providing an all-rounder user interface that touches every aspect of rclone. ",
      "The goal of this project is to make a streamlined and easy to use interface that provides a non-tech savvy person with the power of rclone and its cloud sync functionalities.",
    ],
    links: [
      {
        icon: github,
        name: "GitHub",
        link: "https://github.com/rclone/rclone-webui-react",
      },
      {
        icon: summerofcode,
        name: "Completion Certificate",
        link: "https://summerofcode.withgoogle.com/archive/2019/projects/5707920367419392",
      },
    ],
  },
  {
    title: "Full Stack Java Developer Intern",
    company_name: "Peppercorn Labs",
    icon: peppercornlabs,
    iconBg: "#383E56",
    date: "May 2016 - May 2017",
    points: [
      "Developed a customer-oriented, visual ERP system for a local printing company using Java, SpringBoot, MySQL, Git, and deployed using AWS Lightsail.",
      "Worked on a application that allows to create and maintain Kanban boards using Java, SpringBoot, MySQL.",
      "I was also able to find and mitigate several SQL injection and CORS vulnerabilities in the company's existing applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Chaitanya is one of the best engineers I have worked with in my 15 years of career in the Pune IT industry. He is very proactive and highly motivated to learn new and emerging tech. He is also a quick learner and possesses an excellent level of IQ. During his last project, he also demonstrated his skills as a good team player and led a team of engineers and interns from Pune's top institutes. I believe he will be an asset to any software engineering team.",
    name: "Arpit Agarwal",
    designation: "Co-Founder",
    company: "CakeSoft Technologies Pvt Ltd",
    image: arpit,
  },
  {
    testimonial:
      "Chaitanya was the primary developer for the beta version of our data transfer application. He did a fantastic job of working with us through many iterations of the UI and helped us determine the software stack that allowed us to easily deploy across all major OS's. He always showed up with a positive attitude and was a real pleasure to work with. Chaitanya is a first-rate developer that I would recommend to anyone.",
    name: "Wade Polo",
    designation: "Principal Engineer",
    company: "Redesign Group",
    image: wade,
  },
  {
    testimonial:
      "Chaitanya Bankanhal worked very hard at the project and we completed it despite somewhat challenging global conditions. Chaitanya created a detailed schedule for the work and we more or less stuck to it which shows some maturity on his part - software estimation is hard! Adding plugins to the webui framework has enabled many new uses of the rclone webui and this will benefit users in the future. Chaitanya did great work.",
    name: "Nick Craig-Wood",
    designation: "CEO",
    company: "Rclone Services Ltd",
    image: nick,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
