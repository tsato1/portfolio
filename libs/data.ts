import { ExperienceData, TechStack, WorkData } from "./types"

export const skills = [
  { id: 100, name: 'Next JS', imageUrl: '/next.svg', category: ['web'] } as TechStack,
  { id: 101, name: 'React', imageUrl: '/react.png', category: ['web'] } as TechStack,
  { id: 102, name: 'Typescript', imageUrl: '/typescript.png', category: ['web'] } as TechStack,
  { id: 103, name: 'Tailwindcss', imageUrl: '/tailwind.png', category: ['web'] } as TechStack,
  { id: 104, name: 'Framer Motion', imageUrl: '/framermotion.png', category: ['web'] } as TechStack,
  // { id: 105, name: 'Node JS', imageUrl: '/nodejs.png', category: ['web'] } as TechStack,

  { id: 200, name: 'Kotlin', imageUrl: '/kotlin.png', category: ['mobile'] } as TechStack,
  { id: 201, name: 'Ktor', imageUrl: '/ktor.png', category: ['mobile'] } as TechStack,
  { id: 202, name: 'Gradle', imageUrl: '/gradle.png', category: ['mobile'] } as TechStack,
  // { id: 203, name: 'Java', imageUrl: '/java.png', category: ['mobile']} as TechStack,
  // { id: 204, name: 'SpringBoot', imageUrl: '/springboot.png', category: ['mobile']} as TechStack,

  { id: 300, name: 'MySQL', imageUrl: '/mysql.png', category: ['db', 'web', 'mobile'] } as TechStack,
  { id: 301, name: 'SQLite', imageUrl: '/sqlite.png', category: ['db', 'mobile'] } as TechStack,
  { id: 302, name: 'Mongo DB', imageUrl: '/mongodb.png', category: ['db', 'web', 'mobile'] } as TechStack,
  // { id: 303, name: 'Postgresql', imageUrl: '/postgresql.png', category: ['db', 'web', 'mobile']} as TechStack,
  // { id: 304, name: 'Graphql', imageUrl: '/graphql.png', category: ['db', 'web'] } as TechStack,
  { id: 305, name: 'Planetscale', imageUrl: '/planetscale.png', category: ['db', 'web'] } as TechStack,
  { id: 306, name: 'Prisma', imageUrl: '/prisma.png', category: ['db', 'web'] } as TechStack,

  // { id: 400, name: 'AWS', imageUrl: '/aws.png', category: ['infra'] } as TechStack,
  { id: 401, name: 'SST', imageUrl: '/sst.png', category: ['infra'] } as TechStack,
  { id: 402, name: 'Docker', imageUrl: '/docker.png', category: ['infra'] } as TechStack,
  { id: 403, name: 'Vercel', imageUrl: '/vercel.png', category: ['infra'] } as TechStack,
  // { id: 404, name: 'Postman', imageUrl: '/postman.png', category: ['infra'] } as TechStack,
  // { id: 502, name: 'Mailgun', imageUrl: '/mailgun.png', category: ['other']} as TechStack
] as const

export const experiences = [
  {
    companyName: 'Interestix',
    companyLogoUrl: '/interestix.png',
    title: 'Android Developer / Tester',
    workingPeriod: '2016.1-2016.8',
    jobDescriptions: [
      'Developed a code module that played a fundamental role in the product.',
      'Conducted analysis on code modules to enhance performance.',
      'Wrote JUnit code for conducting comprehensive unit tests.',
    ],
    skills: [
      { imageUrl: '/java.png', name: 'Java' },
      { imageUrl: '/sqlite.png', name: 'SQLite' },
      { imageUrl: '/junit.png', name: 'Junit4' },
      { imageUrl: '', name: 'Working In Team' }
    ],
    testimonials: [
      {
        imageUrl: '/farnyu.jpeg',
        name: 'Farn-Yu Khong',
        position: 'CTO',
        words: 'He excels in both expressing his opinions and actively listening to others. His strong communication skills contribute significantly to effective collaboration and teamwork.',
        linkedInUrl: 'https://www.linkedin.com/in/farn-yu-khong-2607b628/'
      }
    ]
  } as ExperienceData,
  {
    companyName: 'ZL Technologies',
    companyLogoUrl: '/zltech.png',
    title: 'Product Analyst',
    workingPeriod: '2016.8-2019.7',
    jobDescriptions: [
      'Evaluated structured and unstructured big data to formulate strategies, ensuring data accuracy and consistency throughout the system.',
      'Led an international project and managed a diverse team of 10 individuals from various countries.',
      'Created a code module responsible for handling the system\'s localization.',
      'Provided dedicated client support, delivering comprehensive explanations regarding the health of their system.'
    ],
    skills: [
      { imageUrl: '/html.png', name: 'HTML' },
      { imageUrl: '/css.png', name: 'CSS' },
      { imageUrl: '/javascript.png', name: 'Javascript' },
      { imageUrl: '', name: 'Project Management' },
      { imageUrl: '', name: 'Working with Teams' },
      { imageUrl: '', name: 'Consulting on Tech' },
      { imageUrl: '', name: 'Customer Success' },
    ],
    testimonials: [
      {
        imageUrl: '/niki.jpeg',
        name: 'Niharika Bhardwaj',
        position: 'Product Analyst',
        words: 'Tak possesses a clear focus. While he demonstrates a great attention to detail, he also balance this meticulous approach with efficiency for swift progress and adaptation.',
        linkedInUrl: 'https://www.linkedin.com/in/niharikabhardwaj15/'
      }
    ]
  } as ExperienceData,
  {
    companyName: 'Fun Podium',
    companyLogoUrl: '/funpodium.png',
    title: 'Android Developer',
    workingPeriod: '2022.9-2022.12',
    jobDescriptions: [
      'Resolved critical bugs deeply embedded in the code, significantly improving the user experience for a substantial user base.',
      'Efficiently developed new modules with a focus on bug-free implementation.',
      'Maintained close communication with the design team to facilitate progress and address issues collaboratively.'
    ],
    skills: [
      { imageUrl: '/android.png', name: 'Android' },
      { imageUrl: '/kotlin.png', name: 'Kotlin' },
      { imageUrl: '/jetpack.png', name: 'Jetpack Library' },
      { imageUrl: '', name: 'Corutine' },
      { imageUrl: '', name: 'MVVM' },
      { imageUrl: '', name: 'Clean Architecture' },
      { imageUrl: '', name: 'Effective & Clear Communication' }
    ],
    testimonials: [
      {
        imageUrl: '',
        name: 'Jed',
        position: 'Android Developer',
        words: 'Tak\'s ability to identify the root causes of issues and efficiently solve them demonstrates his exceptional analytical skills.',
        linkedInUrl: ''
      }
    ]
  } as ExperienceData,
  {
    companyName: '',
    companyLogoUrl: '',
    title: 'Freelancer / Programming Teacher',
    workingPeriod: '2023.6-present',
    jobDescriptions: [
      'Delivering NextJs and Android projects for clients with extreme care on details, aiming to make all of them satisfied.',
      'Teaching Java with focus on Algorithm and Data Structure.'
    ],
    skills: [
      { imageUrl: '/nextjs.png', name: 'Next JS' },
      { imageUrl: '/react.png', name: 'React' },
      { imageUrl: "/typescript.png", name: "Typescript" },
      { imageUrl: "/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: '/android.png', name: 'Android' },
      { imageUrl: '/kotlin.png', name: 'Kotlin' },
      { imageUrl: '/java.png', name: 'Java' },
      { imageUrl: '', name: 'Algorithm' },
      { imageUrl: '', name: 'Data Structure' },
      { imageUrl: '', name: 'Customer Success' },
      { imageUrl: '', name: 'Effective & Clear Communication' },
    ],
    testimonials: []
  } as ExperienceData
] as const

export const works = [
  {
    name: 'ECommerce Admin Suite',
    description: 'Management console designed for organizaing multiple online stores with ease',
    category: 'web',
    imageUrls: [
      '/ec-admin1.png',
      '/ec-admin2.png',
      '/ec-admin3.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/nextjs.png", name: "Next Js" },
      { imageUrl: "/react.png", name: "React" },
      { imageUrl: "/typescript.png", name: "Typescript" },
      { imageUrl: "/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/shadcnui.png", name: "Shadcn/ui" },
      { imageUrl: "/planetscale.png", name: "Planetscale" },
      { imageUrl: "/prisma.png", name: "Prisma" },
      { imageUrl: "/mysql.png", name: "MySQL" },
      { imageUrl: "/vercel.png", name: "Vercel" },
    ],
    link: ''
  } as WorkData,
  {
    name: 'ECommerce Storefront',
    description: 'Ecommerce store that works in conjunction with ECommerce Admin Suite',
    category: 'web',
    imageUrls: [
      '/ec-store1.png',
      '/ec-store2.png',
      '/ec-store3.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/nextjs.png", name: "Next Js" },
      { imageUrl: "/react.png", name: "React" },
      { imageUrl: "/typescript.png", name: "Typescript" },
      { imageUrl: "/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/vercel.png", name: "Vercel" },
    ],
    link: ''
  } as WorkData,
  {
    name: 'Kakeibo',
    description: 'Simple Android app that keeps track of your income and spendings',
    category: 'mobile',
    imageUrls: [
      '/kakeibo1.png',
      '/kakeibo2.png',
      '/kakeibo3.png',
      '/kakeibo4.png',
      '/kakeibo5.png',
      '/kakeibo6.png',
      '/kakeibo7.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/android.png", name: "Android" },
      { imageUrl: "/kotlin.png", name: "Kotlin" },
      { imageUrl: '/jetpack.png', name: 'Jetpack Library' },
      { imageUrl: "/sqlite.png", name: "SQLite" },
      { imageUrl: "", name: "MVVM" },
      { imageUrl: "", name: "Clean Architecture" },
      { imageUrl: "", name: "Dagger Hilt" },
      { imageUrl: "", name: "Retrofit" },
    ],
    link: 'https://play.google.com/store/apps/details?id=com.kakeibo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  } as WorkData,
  {
    name: 'This portfolio website',
    description: 'Simple web app with email functionality (contact section)',
    category: 'web',
    imageUrls: ['/portfolio.png'],
    isLive: true,
    skills: [
      { imageUrl: "/nextjs.png", name: "Next Js" },
      { imageUrl: "/react.png", name: "React" },
      { imageUrl: "/typescript.png", name: "Typescript" },
      { imageUrl: "/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/framermotion.png", name: "Framer Motion" },
      { imageUrl: "/sst.png", name: "SST" },
      { imageUrl: "/aws-ses.png", name: "AWS SES" },
    ],
    link: ''
  } as WorkData,
] as const