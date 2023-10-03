import {
    rudy,
    jaire,
    patrizha,
    portfolio,
    find,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ptv,
    lto,
    bfar,
    chmc,
    metaversus,
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
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Angular/React Developer",
      icon: mobile,
    },
    {
      title: "Backend, Java Developer",
      icon: backend,
    },
    {
      title: "SpringBoot & REST API ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
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
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Support Intern",
      company_name: "People's Television Network",
      icon: ptv,
      iconBg: "#FFFFFF",
      date: "March 2019 - August 2019",
      points: [
        "Identifying hardware and software solutions.",
        "Troubleshooting technical issues and Diagnosing and repairing faults. ",
        "Resolving network issues and Installing and configuring hardware and software.",
        "Installation of Internet Connections such as Data Cabinet, Access Point, etc.",
      ],
    },
    {
      title: "I.T Support Specialist",
      company_name: "Commonwealth Hospital and Medical Center",
      icon: chmc,
      iconBg: "#FFFFFF",
      date: "September 2019 - March 2020",
      points: [
        "Resolving System Issues and Network Issues.",
        "Checking audit logs of the transactions and verifying the Data.",
        "Monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues as they arise.",
        "Other tasks assigned by immediate Supervisor, such as Sets up and configures new computer and internet equipment. ",
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: "Land Transportation Office",
      icon: lto,
      iconBg: "#FFFFFF",
      date: "December 2020 - June 2023",
      points: [
        "Checks and Monitors issues logged in Customer Relations Management (CRM) system. ",
        "Responsible as the 1st level Service Desk in accordance to Issue Escalation Matrix - immediate action on the system related issues escalated by internal users.",
        "Performs IT-Related tasks which may require travel or field works, as deemed necessary, such as site inspection, trainings, system installation on sites nationwide, among others.",
        "Performs other duties and tasks that may be assigned by the Chief of Management Information Division.",
      ],
    },
    {
      title: "Senior Computer Operator",
      company_name: "Bureau of Fisheries and Aquatic Resources",
      icon: bfar,
      iconBg: "#FFFFFF",
      date: "July 2023 - Present",
      points: [
        "Developing a System for Planning Department, which is Budget Management and Monitoring System.",
        "Responsible for the maintenance and enhancement of the existing website/webpage.",
        "Task to create Repository Website with various Data and Documents saved in it.",
        "Providing technical Support such as: Computer,Printer,Scanner & other Peripherals maintenance. Maintaining the system updates and wifi/network configuration, Ask to be Technical Personnel of the Department, and other computer related tasks to be said by Chief.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is a Good Employee, Such an amazing person. He is able to do his job with extra excellency! Your humility and willingness to collaborate make you an absolute pleasure to work with. ",
      name: "Patrizha Perez",
      designation: "Client Care Representative",
      company: "Land Transportation Office",
      image: patrizha,
    },
    {
      testimonial:
        "Your attention to detail and your ability to find innovative solutions to problems is something we all value immensely. You have a natural knack for boosting team morale and creating a positive work environment, which is truly a gift.",
      name: "Rudy Palima",
      designation: "Technical Support",
      company: "Land Transportation Office",
      image: rudy,
    },
    {
      testimonial:
        "I just wanted to take a moment to appreciate the incredible dedication and hard work you bring to our team. Your consistent effort to go above and beyond is truly inspiring.",
      name: "Joshua Jaire Lumayag",
      designation: "Technical Support",
      company: "Land Transportation Office",
      image: jaire,
    },
  ];
  
  const projects = [
    {
      name: "Fped Infra & Network Database",
      description:
        "A repository programs system for the Fisheries Planning and Economic Division of the Department of Agriculture – Bureau of Fisheries and Aquatic Resources. The system aims to provide a centralized platform for uploading and downloading various documents and files, facilitating efficient information sharing and collaboration among staff members. ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: find,
      source_code_link: "https://github.com/", // LINK FOR THE SITE IF DEPLOYED
    },
    {
      name: "MetaVerse",
      description:
        "Web 3.0 is a concept for a decentralized version of the world wide web. The MetaVersus refers to virtual worlds that enable online social interaction using digital avatars. As each one develops, we are likely to see more metaverse environments incorporate web3 technology.",
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
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/",
    },
    {
      name: "My Simple Portfolio",
      description:
        "Basically, This is my first portfolio. And honestly, I just add some stuffs here and make a dummy of Works, Services, Client Reviews,etc. This is for educational purposes and also to Showcase my Skills on Web Development with Clean User Interface.",
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
      image: portfolio,
      source_code_link: "https://larkmaytrixmariano.github.io/lm-portofilio/",
    },
  ];


  const socials = [
    {
      name: 'twitter',
      url: '/twitter.svg',
      profileUrl: 'https://twitter.com/lark_mariano', // Replace with your Twitter profile URL
    },
    {
      name: 'linkedin',
      url: '/linkedin.svg',
      profileUrl: 'https://www.linkedin.com/in/lark-mariano-077a21263/', // Replace with your LinkedIn profile URL
    },
    {
      name: 'instagram',
      url: '/instagram.svg',
      profileUrl: 'https://www.instagram.com/larkmariano/', // Replace with your Instagram profile URL
    },
    {
      name: 'facebook',
      url: '/facebook.svg',
      profileUrl: 'https://www.facebook.com/marianolark', // Replace with your Facebook profile URL
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects , socials };