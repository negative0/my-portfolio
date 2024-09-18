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
  electron,
  indexnine,
  sajan
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
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
        name: "Electron",
        icon: electron,
      },
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
    title: "Lead Software Engineer",
    company_name: "Indexnine Techologies Pvt Ltd",
    icon: indexnine,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Leading a team of developers to develop a product for Corporate Airline & Hotel booking for corporate.tripjack.com.",
      "Conceived and implemented a multi-tenant modular monolith architecture for the app, featuring asymmetric encryption.",
      "Spearheaded the development of a electron based single sign-on (SSO) tool, empowering TripJack's support staff to share airline credentials securely and efficiently.",
      "Streamlined API integration by introducing automated code generation using Swagger to the React App which reduced API integration time by around 50%. It generates functions for every API along with TypeScript types. This eliminated the need for frontend developers to manually write and maintain API code, and documentation.",
      "Took up initiative to build an AI automated code review tool for the Leads in order to empower them to review code faster, catch more bugs and compare the code to relevant ticket in Jira",
      "The software successfully managed and processed over ₹12 lakhs worth of flight and hotel bookings",
    ],
  },
  {
    title: "Technical Lead (Zebrista.com)",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: zebrista,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Nov 2023",
    points: [
      "Led a team of developers for the product development of 'SalesJarvis.ai' later rebranded to 'Zebrista'.",
      "Designed the framework for the product with a multi-tenant architecture from scratch under the guidance of the CTO.",
      "Responsible for stakeholder communication, product feature understanding, and implementation.",
      "Built a scalable scraping engine using Puppeteer from scratch and deployed using Kubernetes Jobs and implemented a job queue on the server.",
      "Integrated OAuth for Google, Microsoft, Pipedrive, HubSpot, Zoho among others.",
      "Built a full CD pipeline using GitHub Actions, DockerHub, and Kubernetes with Helm, to deploy dev, staging and production builds",
      "Worked on silosleuth.com project to enable semantic search and summary generation for siloed data (podcasts) and its libraries using OpenAI’s API, Embeddings and Weaviate.",
      "Also, interviewed candidates, and hired them for the team.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: cakesoft,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developed an electron-react based data transfer application named 'ArtistAnywhere' for ReDesignGroup which used Redux for state management and also integrated a go binary (rclone) to transfer data at a high speed reliably.",
      "Worked on a crypto projects ranking platform CryptoAptitude for investors interested in crypto projects. This project consolidated a lot of information from various sources like LinkedIn, News sites, and University rankings to determine a success probability of a crypto product. Also helped integrate Elastic stack to sync data between MongoDB and the Elastic engine for better query capabilities.",
      "Developed a PHP based assessment platform (CakeSoft Assess) to conduct online MCQ rounds for hiring.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CakeSoft Technologies Pvt Ltd",
    icon: cakesoft,
    iconBg: "#383E56",
    date: "July 2020 - March 2021",
    points: [
      "Worked on a crypto wallet mobile app 'SACWallet' based on Flutter which integrated with a Node.js backend.",
      "Developed a scraping tool using Puppeteer for a client which checked the bank balance of its customers and reported it to a server queue for further processing.",
      "Made full GitHub repository templates for full stack applications which can be used by the company to quickly kickstart a new project using MERN/ MEAN stack with local, production, and docker build support.",
      "Created entire CD pipelines to deploy to S3/EC2 for existing projects to enable faster deployment for various client projects.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Google Summer of Code '2019 '2020 - CCExtractor.org",
    icon: summerofcode,
    iconBg: "#E6DEDD",
    date: "May 2019 - Aug 2019",
    points: [
      "Built a React-Redux web application for rclone cloud sync tool with testing support and continuous integration using GitHub Actions.",
      "Created a plugins architecture for the web UI that allowed users to install plugins directly in the browser, utilizing rclone as a filesystem.",
      "Implemented a plugin for rclone that allows users to mount their cloud storage as a filesystem on their computer.",
      "Created a platform for other developers to build their own plugins and add them to the rclone web-gui.",
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
    title: "Full Stack Java Developer",
    company_name: "Peppercorn Labs",
    icon: peppercornlabs,
    iconBg: "#383E56",
    date: "May 2016 - May 2017",
    points: [
      "Developed a customer-oriented, visual ERP system for a local printing company using Java, SpringBoot, MySQL, Git, and deployed using AWS Lightsail as an intern.",
      "Worked on an application that allows to create and maintain Kanban boards using Java, SpringBoot, MySQL.",
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
    testimonial: `
      Chaitanya is a talented Engineer with a strong grasp of programming concepts. 
      His dedication to his craft and commitment to producing high-quality work are truly commendable. 
      His problem-solving skills are exceptional, and he has a knack for breaking down complex problems into manageable tasks. 
      Beyond his technical abilities, Chaitanya is a team player who consistently goes above and beyond to help his colleagues. 
      His collaborative nature and positive attitude make him a valuable asset to any project or team.`,
    name: 'Sajan R. Agrawal',
    designation: 'Co-Founder',
    company: 'CakeSoft Technologies Pvt Ltd',
    image: sajan
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

export { services, technologies, experiences, testimonials };
