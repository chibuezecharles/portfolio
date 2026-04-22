import advertApp from './src/assets/advert-app.PNG';
import projectSupportSystem from './src/assets/support-project.PNG';
import caseManagementSystem from './src/assets/case-management.PNG';
import pms from './src/assets/pms.PNG';
import membershipPortal from './src/assets/membership-portal.PNG';
import snaarpDashboard from './src/assets/snaap.PNG';
import digitalproduct from './src/assets/digital-pro.PNG';
import taskMan from './src/assets/task-man.PNG';
import webSite from './src/assets/website.PNG'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chibueze Chuma ',
  role: 'Front End Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Frontend Engineer focused on building scalable, high-performance web and mobile applications using React.js, Next.js, React Native, and modern UI frameworks. Proven ability to translate complex product requirements into intuitive, user-centric experiences while optimizing performance and ensuring seamless backend integration. Experienced in agile environments, contributing to architecture decisions, and delivering solutions that improve efficiency and drive measurable business outcomes.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/chuma-chibueze-0ab63718b',
    github: 'https://github.com/chibuezecharles',
  },
}

const projects = [
  {
    id: 1,
    name: 'Advert Application',
    description:
      'Built a high-performance advertising platform for serving campaigns across high-traffic applications, optimizing delivery, performance, and user engagement through efficient state management and scalable UI architecture.',
    stack: ['TypeScript', 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/Advert-app',
    livePreview: 'https://advert-app.vercel.app/',
    image: advertApp,
  },
  {
    id: 2,
    name: 'Membership Portal',
    description:
      'Built a scalable membership management portal with secure authentication and dynamic dashboards, streamlining member administration and improving operational efficiency.',
    stack: ['TypeScript', 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/ICSAN-membership-portal',
    livePreview: 'https://icsan-membership-portal.vercel.app/',
    image: membershipPortal,
  },
  {
    id: 3,
    name: 'Case Management System',
    description:
      'Engineered a case management system for organizations to track and manage cases efficiently, featuring structured workflows and data visibility to support operational decision-making.',
    stack: ['React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/case-management-system',
    livePreview: 'https://case-management-system-psi.vercel.app/',
    image: caseManagementSystem,
  },
  {
    id: 4,
    name: 'Performance Management System',
    description:
      'Designed a performance management system with KPI tracking, interactive dashboards, and automated reporting, enabling real-time insights and data-driven decision-making.',
    stack: ['React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/performance-management-system',
    livePreview: 'https://performance-management-system-ruddy.vercel.app/',
    image: pms,
  },
  {
    id: 5,
    name: 'Project Support System',
    description:
      'Developed a project support system enabling teams to manage projects and track support requests, improving issue resolution workflows and enhancing overall user satisfaction.',
    stack: ['React', 'Chakra UI', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/project-support-system',
    livePreview: 'https://project-support-system.vercel.app/',
    image: projectSupportSystem,
  },
  {
    id: 6,
    name: 'Digital Product Platform',
    description:
      'Developed a digital product platform enabling users to browse, purchase, and access products with flexible payment options, delivering a seamless and optimized user experience.',
    stack: ['React', 'Chakra UI', 'Tailwind CSS', 'TanStack Query'],
    sourceCode: 'https://github.com/chibuezecharles/Isl-digital-Product',
    livePreview: 'https://isl-digital-product.vercel.app/',
    image: digitalproduct,
  },
  {
    id: 7,
    name: 'Snaarp Dashboard',
    description:
      'Created a data visualization dashboard for monitoring and managing platform metrics, providing clear insights through interactive UI components and optimized state handling.',
    stack: ['React', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/snaarp-dashboard',
    livePreview: 'https://snaarp-dashboard-psi.vercel.app/',
    image: snaarpDashboard,
  },
  {
    id: 8,
    name: 'Task Management System',
    description:
      'Developed a task management system to organize, track, and manage workflows, improving team productivity and task visibility across projects.',
    stack: ['React', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/Task-Management-App',
    livePreview: 'https://task-management-app-eosin-three.vercel.app/',
    image: taskMan,
  },
  {
    id: 9,
    name: 'Company Website',
    description:
      'Built a corporate website focused on usability and performance, delivering seamless navigation, clear service presentation, and optimized user engagement.',
    stack: ['React', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/vatebra-website',
    livePreview: 'https://vatebra-website-iota.vercel.app/',
    image: webSite,
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'React Native',
  'Redux',
  'SASS',
  'Tailwind CSS',
  'Material UI',
  'Chakra UI',
  'Shadcn',
  'Bootstrap',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  email: 'chibueze2805@mail.com',
}

export { header, about, projects, skills, contact }