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
    'Dedicated Frontend Engineer specializing in React.js, Next.js, Reactive Native and modern UI frameworks, with 4+ years of experience creating responsive, user-friendly web and mobile applications. Known for transforming complex concepts into simple, engaging user experiences, optimizing code for performance, and integrating seamlessly with backend services. Experienced in agile collaboration, problem-solving, and implementing innovative solutions that improve processes and drive measurable results.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/chuma-chibueze-0ab63718b',
    github: 'https://github.com/chibuezecharles',
  },
}

const projects = [
  // if there are no projects, Projects section won't show up
  {
    id: 1,
    name: 'Advert Application',
    description:'advertising platform which serves campaigns across high-traffic websites, ensuring optimal performance and user engagement.',
    stack: ['TypeScript', 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/Advert-app',
    livePreview: 'https://advert-app.vercel.app/',
    image: advertApp,
  },
  {
    id: 2,
    name: 'Project Support System',
    description:'Project support system that provides a platform for organization to manage and track their projects, support requests etc, ensuring efficient issue resolution and improved user satisfaction.',
    stack: ['React', 'Chakra UI', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/project-support-system',
    livePreview: 'https://project-support-system.vercel.app/',
    image: projectSupportSystem,
  },
  {
    id: 3,
    name: 'Case Management System',
    description:'Case management system that provides a platform for organizations like EFCC etc to manage and track their cases, ensuring efficient issue resolution.',
    stack: [ 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/case-management-system',
    livePreview: 'https://case-management-system-psi.vercel.app/',
    image: caseManagementSystem,
  },
  {
    id: 4,
    name: 'Performance Management System',
    description:'performance management system with KPI tracking, interactive dashboards, and automated reporting, enabling real-time performance insights for management.',
    stack: [ 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/performance-management-system',
    livePreview: 'https://performance-management-system-ruddy.vercel.app/',
    image: pms,
  },
  {
    id: 5,
    name: 'Membership portal',
    description:'Membership portal that provides a platform for organizations to manage and track their members, ensuring efficient issue resolution.',
    stack: [ 'TypeScript', 'React', 'Chakra UI', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/ICSAN-membership-portal',
    livePreview: 'https://icsan-membership-portal.vercel.app/',
    image: membershipPortal,
  },
  {
    id: 6,
    name: 'Digital Product',
    description:'a platform where users can easily access and purchase digital products and pay later, ensuring a seamless and efficient user experience.',
    stack: [ 'React', 'Chakra UI',, 'Tailwind CSS', 'TanStack Query'],
    sourceCode: 'https://github.com/chibuezecharles/Isl-digital-Product',
    livePreview: 'https://isl-digital-product.vercel.app/',
    image: digitalproduct,
  },
  {
    id: 7,
    name: 'Snaarp Dashboard',
    description:'Dashboard for managing and visualizing data related to the Snaarp platform.',
    stack: [ 'React', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/snaarp-dashboard',
    livePreview: 'https://snaarp-dashboard-psi.vercel.app/',
    image: snaarpDashboard,
  },
  {
    id: 8,
    name: 'Task Management System',
    description:'Task management system that provides a platform for organizations to manage and track their tasks, ensuring efficient issue resolution.',
    stack: [ 'React', 'Tailwind CSS', 'Redux'],
    sourceCode: 'https://github.com/chibuezecharles/Task-Management-App',
    livePreview: 'https://task-management-app-eosin-three.vercel.app/',
    image: taskMan,
  },
  {
    id: 9,
    name: 'Company Website',
    description:'A company website designed to deliver a seamless navigation experience, effectively showcase the company’s services, and provide users with a simple and convenient way to get in touch.',
    stack: [ 'React', 'Tailwind CSS', 'Redux'],
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