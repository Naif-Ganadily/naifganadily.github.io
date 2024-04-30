/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Naif's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end Machine Learning products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Naif A. Ganadily Portfolio",
    type: "website",
    url: "http://naifganadily.com/",
  },
};

//Home Page
const greeting = {
  title: "Naif A. Ganadily",
  logo_name: "NaifGanadily",
  nickname: "Nathan",
  subTitle:
    "A passionate individual who always thrives to work on end to end Machine Learning products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ekbipa6q7_2igUhtZjiFnxUUjKAH26gl/view?usp=sharing",
  portfolio_repository: "https://github.com/Naif-Ganadily",
  githubProfile: "https://github.com/Naif-Ganadily",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Naif-Ganadily",
  // linkedin: "https://www.linkedin.com/in/naif-ganadily/",
  // gmail: "ganadilynaif@gmail.com",

  {
    name: "Github",
    link: "https://github.com/Naif-Ganadily",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/naif-ganadily/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC01vuFHgDdRUVIe64KX2wQA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  */
  {
    name: "Gmail",
    link: "mailto:ganadilynaif@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  */
  /*
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  */
  /*
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "AI, Machine Learning, Deep Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Privacy Preserving, Computer Vision and NLP (LLM) projects",
        "⚡ Analytical techniques for enhancing Computer Vision and Language Model (LLM) applications through predictive analytics and temporal data interpretation",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "AI Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        /*
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
          */
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        /*
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
          */
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    /*
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ganadilynaif/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/naifaganadily",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Washington",
      subtitle: "MS in Electrical Engineering",
      logo_path: "University-of-Washington-Logo-modified.png",
      alt_name: "UW",
      duration: "2022 - 2024",
      descriptions: [
        "⚡My academic journey includes foundational courses in Artificial Intelligence, Data Structures and Algorithms, complemented by advanced studies in Machine Learning, Privacy-Preserving Techniques, Computer Vision, and Natural Language Processing",
        "⚡Apart from this,  I've engaged in specialized research with NVIDIA, contributing to the development of the LOFTR model, and explored Federated Learning's privacy aspects, showcasing my dedication to cutting-edge technological advancements.",
        "⚡I've been awarded the SACM Scholarship for two consecutive years, reflecting my standing among the top performers in my cohort and my commitment to advancing in the field of AI and engineering.",
      ],
      website_link: "https://www.engr.washington.edu/",
    },
    {
      title: "University of Business & Technology",
      subtitle: "BS in Electrical Engineering",
      logo_path: "AvCTVo0CAAAmo7c-modified.png",
      alt_name: "UBT",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ Attained a BS in Electrical Engineering from the University of Business & Technology, I started the Culture & Arts Club which enriched my university experience.",
        "⚡ Throughout my bachelor's of science degree, I led significant projects including an Energy Management Analysis for the College of Engineering Building and an Independent Design Project on Face Mask Detection, demonstrating leadership and technical expertise.",
        "⚡ My skill set is reinforced by proficiency in Microsoft Office, MATLAB, and additional tools, underpinning my analytical and engineering capabilities.",
      ],
      website_link: "https://www.ubt.edu.sa/About/Home",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IBM Data Science Professional Certificate",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/SQKWATMW4HNS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Generative AI with Large Language Models",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XV3NC9Q2DUD8",
      alt_name: "generative_ai",
      color_code: "#00000099",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "- Google Career Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/eb69f15a-937e-44b2-8fbe-b7af467bb190?source=linked_in_profile",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/9TMXNQ2L7QRV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "secure-aws-banner@2x.jpg",
      certificate_link:
        "https://www.credly.com/badges/8c1ac57d-bf45-42d7-bac1-07d3b3e364f6?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },

    {
      title: "Azure AI Fundamentals",
      subtitle: "- Azure AI",
      logo_path: "azure-ai-fundamentals-600x600",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/naifganadily/credentials/35c27ab118dfa657?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      alt_name: "Azure",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "In my professional journey, I have gained valuable skills in the fields of machine learning and deep learning by working as an AI Developer. I also ventured into entrepreneurship by starting my own business. My tasks involved creating sophisticated AI solutions and frameworks, with a special focus on utilizing advanced technologies from NVIDIA to drive innovation forward. This hands on experience has provided me with a deep insight into the practical applications of AI.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Founder & CEO",
          company: "JIDARIYAH | جدارية",
          // company_url: "",
          logo_path: "1630493421544.jpg",
          duration: "August 2020 - November 2022",
          location: "Jeddah, Saudi Arabia",
          description:
            "I spearheaded the launch of Sea Colors Trading Establishment, where I utilized WordPress for website design, leveraged Digital Ocean's robust hosting capabilities, and orchestrated social media campaigns to enhance user engagement. In a stride toward immersive technology, I developed an augmented reality software with ARCore to elevate the customer experience. Concurrently, I oversaw financial planning by harnessing the analytical power of Excel and Google Sheets. Although the venture reached early profitability, I strategically pivoted towards artificial intelligence to align better with evolving market trends and my personal academic pursuits.",
          color: "#9b1578",
        },
        {
          title: "AI Tutor",
          company: "Varsity Tutors, a Nerdy Company",
          company_url: "https://legatohealthtech.com/",
          logo_path: "varsity_tutors_llc_logo.jpg",
          duration: "April 2022 - July 2022",
          location: "West Linn - Oregon, USA",
          description:
            "I had the rewarding opportunity to instruct nine students in Python and Machine Learning, meeting three times a week to align closely with their individual goals and expectations. Additionally, I provided virtual Arabic lessons to two students starting from the fundamentals, on a weekly basis. The experience was incredibly fulfilling, and while I greatly enjoyed my time with all of the students, privacy policies regrettably prevent me from sharing visual records of our interactive sessions.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research Collaboration",
      experiences: [
        {
          title: "Research Collaborator",
          company: "NVIDIA.",
          company_url: "https://www.nvidia.com/en-us/",
          logo_path: "nvidia_logo.png",
          duration: "July 2023 - March 2024",
          location: "Seattle - Washington, USA",
          description:
            "In my role at NVIDIA, I have been deeply involved in the practical application of the LoFTR model for computer vision. My responsibilities included managing the YCB dataset, which is composed of 21 distinct objects, to ensure its readiness for detailed analysis and processing. I have also been engaged in 3D modeling and rendering, using Blender to import and apply textures to objects, thereby creating synthetic images that closely match the spatial accuracy of real-world counterparts. My work extended to image processing, particularly in extracting vertex information from both static and dynamic images to capture vital data from synthetic and actual RGB footage. Additionally, I performed data analysis, where I compared vertex data between synthetic and real images, contributing to research in object recognition and scene comprehension. A significant part of my internship involved compiling a dataset of 48 grids showcasing objects in different orientations, which is crucial for developing robust computer vision models. Throughout this internship, I had the opportunity to work with technologies such as Python, Blender API, advanced data structures and algorithms, VS Code, Git, and GitHub, all of which played a significant role in advancing the field of computer vision technology.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Event Coordinator",
          company: "United States Embassy of Jeddah",
          company_url: "https://sa.usembassy.gov/jeddah/",
          logo_path: "uscg-jeddah-seal.png",
          duration: "December 2019 - December 2019",
          location: "Jeddah, Saudi Arabia",
          description:
            "I have been involved in the coordination of events and activities for the United States Embassy of Jeddah. I have been responsible for the planning and execution of events, including the coordination of guest speakers, the organization of event logistics, and the management of event budgets. I have also been responsible for the development of event marketing materials, including the creation of event flyers, posters, and social media content. I have also been involved in the coordination of event volunteers, including the recruitment, training, and management of volunteers. I have been responsible for the development of event evaluation materials, including the creation of event surveys and the analysis of event feedback. I have also been involved in the coordination of event follow-up activities, including the development of event reports and the management of event data.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "During my Master of Science in Electrical Engineering at the University of Washington I concentrated on End-to-End development of AI projects within web, mobile, and edge computing platforms. Connecting theoretical concepts with practical applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Working on these Research Projects for Publications.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Upcoming Research Projects",
      createdAt: "TBD",
      description: "",
      // url: "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "",
      createdAt: "TBD",
      description: "",
      // url: "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "",
      createdAt: "TBD",
      description: "",
      // url: "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },

    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "",
      createdAt: "TBD",
      description: "",
      url: "",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "",
      createdAt: "TBD",
      description: "",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Screenshot.jpg",
    description:
      "I am available mostly on my Github and Linkedin. You can message me, I will reply within 2 days. I can help you with ML, Deeplearning, Computer Vision, NLP, Edge Devices and Web/App Development.",
  },

  blogSection: {
    title: "Blogs",
    subtitle: "Coming Soon.",
    // link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "Kanodar",
    country: "USA",
    region: "West Coast",
    // postalCode: "385520",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
