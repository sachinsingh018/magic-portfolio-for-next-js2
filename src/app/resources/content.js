import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Digitrex",
  lastName: "Tech",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech consulting",
  avatar: "/images/avatar.jpg",
  location: "Europe/Vienna", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English","Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to Digitrex's Newsletter</>,
  description: (
    <>
      Stay updated with the latest in technology, design, and innovation. I share insights on the intersection of creativity, engineering, and emerging tech trends. Join the conversation and stay ahead of the curve!
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `Welcome to Digitrex`,
  description: `Pioneering AI-driven solutions and technology consulting to shape the future of digital transformation.`,
  headline: <>Innovating the Future with AI & Technology</>,
  subline: (
    <>
      At <InlineCode>Digitrex</InlineCode>, we build intelligent solutions that redefine industries.
      <br /> From AI-driven applications to scalable cloud infrastructure, we turn ideas into reality.
    </>
  ),
};
const about = {
  label: "About",
  title: "About Us",
  description: `Discover the vision and expertise behind Digitrex, driving innovation from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://majlis.network/",
  },
  intro: {
    display: true,
    title: "Who We Are",
    description: (
      <>
        Digitrex is a global technology firm specializing in AI-driven solutions, cloud architecture,  
        and enterprise digital transformation. Our team is dedicated to solving complex challenges  
        through cutting-edge technology, ensuring businesses stay ahead in the digital era.
      </>
    ),
  },
work: {
  display: true, // set to false to hide this section
  title: "Our Expertise",
  experiences: [
    {
      company: "Digitrex AI Solutions",
      timeframe: "2020 - Present",
      role: "Technology & AI Solutions Partner",
      achievements: [
        <>
          Engineered AI-powered automation tools that improved operational efficiency by 35%  
          for enterprise clients.
        </>,
        <>
          Developed scalable cloud infrastructure solutions, reducing downtime and  
          optimizing system performance for businesses worldwide.
        </>,
      ],
      images: [
        {
          src: "/images/projects/project-01/cover-01.jpg",
          alt: "AI Solutions",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      company: "InnovateX Labs",
      timeframe: "2016 - 2020",
      role: "Lead Software Architect",
      achievements: [
        <>
          Designed and implemented an advanced cybersecurity framework, securing digital assets  
          for Fortune 500 companies.
        </>,
        <>
          Led the development of a machine learning-powered recommendation system,  
          enhancing customer engagement by 25%.
        </>,
      ],
      images: [],
    },
  ],
},
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
        technical: {
    display: true, // set to false to hide this section
    title: "Technical Expertise",
    skills: [
      {
        title: "AI & Data Science",
        description: <>Developing AI-driven solutions to optimize business processes and decision-making.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: <>Building scalable, cloud-native applications with automated CI/CD pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on Innovation, Technology & Beyond",
  description: `Read what we have been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
