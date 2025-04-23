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
  sajan,
  tauseef,
  seema,
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
    title: "AI Lead",
    company_name: "Indexnine Techologies Pvt Ltd",
    icon: indexnine,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Working on making Production Grade Agents possible with a focus on LLMs, RAG, and other AI Technologies.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Indexnine Techologies Pvt Ltd",
    icon: indexnine,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Leading a team of developers to develop a product used by Corporates to book airline & hotels (corporate.tripjack.com) which has processed over ₹12 lakhs worth of flight and hotel bookings.",
      "Conceived and implemented a multi-tenant modular monolith architecture for the app, featuring asymmetric encryption.",
      "Streamlined API integration by introducing automated code generation using Swagger to the React App which reduced API integration time by around 50%. It generates functions for every API along with TypeScript types. This eliminated the need for frontend developers to manually write and maintain API code, and documentation.",
      "Spearheaded the development of a electron based single sign-on (SSO) tool, empowering TripJack's support staff to share airline credentials securely and efficiently.",
      "Took up initiative to build an AI automated code review tool for the Leads in order to empower them to review code faster, catch more bugs and compare the code to relevant ticket in Jira (genlabs.in).",
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
      "I’ve worked with Chaitanya and found him to be sharp and clear-headed when it comes to solving problems. He doesn't just scratch the surface but dives deep to truly understand the issue and get to the root of it — I’ve never found him clueless about what’s going on beneath.\n\nHe’s straightforward in his approach, honest in his communication, and brings a good balance of thought and calmness to discussions. Beyond his skills, he's genuinely a great person to work with — humble, polite, and always collaborative.\n\nAny team would be lucky to have him.",
    name: "Tauseef Ahmed Siddiqui",
    designation: "Principal Product Manager",
    company: "TripJack",
    image: tauseef,
  },
  {
    testimonial:
      "I had the pleasure of working with Chaitanya, and I can confidently say he is one of the most dedicated and talented individuals I have encountered. Chaitanya is incredibly smart, always giving 100% to his work, and demonstrating exceptional problem-solving skills.\n\nWhat stands out most about Chaitanya is his approachable and welcoming attitude toward every team member. If someone on the team is stuck on an issue, Chaitanya is always the go-to person. He has a unique ability to offer fresh perspectives and innovative solutions, making him an invaluable asset to the team.\n\nChaitanya possesses an impressive understanding of the product and consistently shows a deep dedication to his work. He has a clear grasp of client requirements and ensures that they are met with precision. Whenever a critical task with tight deadlines arises, Chaitanya is the first person who comes to mind. His passion for the product and his commitment to excellence are truly inspiring.\n\nI wholeheartedly wish Chaitanya all the best for his future and have no doubt he will continue to achieve great success.",
    name: "Seema Hande",
    designation: "Engineering Manager",
    company: "Indexnine",
    image: seema,
  },
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
  {
    testimonial:
      "I highly recommend Chaitanya, an exceptional full stack web development intern who has been working with our team on various projects. During his internship, Chaitanya demonstrated outstanding technical skills and a keen understanding of multiple technologies, including Java, Spring Boot, Bootstrap, jQuery, and MySQL. He was instrumental in the development of several projects, showcasing his versatility and capability to deliver high-quality results under tight deadlines.",
    name: "Ved Muthal",
    designation: "CEO and Co-Founder",
    company: "Peppercorn Labs",
    image: peppercornlabs,
  },
];

export { services, technologies, experiences, testimonials };
