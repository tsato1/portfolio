import { ExperienceData, TechStack, WorkData } from "./types"

export const skills = [
  { id: 100, name: 'Next JS', imageUrl: '/icons/techstack/frontend/next.svg', category: ['web'] } as TechStack,
  { id: 101, name: 'React', imageUrl: '/icons/techstack/frontend/react.png', category: ['web'] } as TechStack,
  { id: 102, name: 'Typescript', imageUrl: '/icons/techstack/frontend/typescript.png', category: ['web'] } as TechStack,
  { id: 103, name: 'Tailwindcss', imageUrl: '/icons/techstack/frontend/tailwind.png', category: ['web'] } as TechStack,
  { id: 104, name: 'Framer Motion', imageUrl: '/icons/techstack/frontend/framermotion.png', category: ['web'] } as TechStack,
  // { id: 105, name: 'Node JS', imageUrl: '/icons/techstack/frontend/nodejs.png', category: ['web'] } as TechStack,

  { id: 200, name: 'Kotlin', imageUrl: '/icons/techstack/mobile/kotlin.png', category: ['mobile'] } as TechStack,
  { id: 201, name: 'Ktor', imageUrl: '/icons/techstack/backend/ktor.png', category: ['mobile'] } as TechStack,
  { id: 202, name: 'Gradle', imageUrl: '/icons/techstack/mobile/gradle.png', category: ['mobile'] } as TechStack,
  // { id: 203, name: 'Java', imageUrl: '/icons/techstack/backend/java.png', category: ['mobile']} as TechStack,
  // { id: 204, name: 'SpringBoot', imageUrl: '/icons/techstack/backend/springboot.png', category: ['mobile']} as TechStack,

  { id: 300, name: 'MySQL', imageUrl: '/icons/techstack/db/mysql.png', category: ['db', 'web', 'mobile'] } as TechStack,
  { id: 301, name: 'SQLite', imageUrl: '/icons/techstack/db/sqlite.png', category: ['db', 'mobile'] } as TechStack,
  { id: 302, name: 'Mongo DB', imageUrl: '/icons/techstack/db/mongodb.png', category: ['db', 'web', 'mobile'] } as TechStack,
  // { id: 303, name: 'Postgresql', imageUrl: '/icons/techstack/db/postgresql.png', category: ['db', 'web', 'mobile']} as TechStack,
  // { id: 304, name: 'Graphql', imageUrl: '/icons/techstack/db/graphql.png', category: ['db', 'web'] } as TechStack,
  { id: 305, name: 'Planetscale', imageUrl: '/icons/techstack/db/planetscale.png', category: ['db', 'web'] } as TechStack,
  { id: 306, name: 'Prisma', imageUrl: '/icons/techstack/db/prisma.png', category: ['db', 'web'] } as TechStack,

  // { id: 400, name: 'AWS', imageUrl: '/icons/techstack/aws.png', category: ['infra'] } as TechStack,
  { id: 401, name: 'SST', imageUrl: '/icons/techstack/sst.png', category: ['infra'] } as TechStack,
  { id: 402, name: 'Docker', imageUrl: '/icons/techstack/docker.png', category: ['infra'] } as TechStack,
  { id: 403, name: 'Vercel', imageUrl: '/icons/techstack/frontend/vercel.png', category: ['infra'] } as TechStack,
  // { id: 404, name: 'Postman', imageUrl: '/icons/techstack/postman.png', category: ['infra'] } as TechStack,
  // { id: 502, name: 'Mailgun', imageUrl: '/icons/techstack/mailgun.png', category: ['other']} as TechStack
] as const

export const experiences = [
  {
    companyName: 'Interestix',
    companyLogoUrl: '/icons/companyLogos/interestix.png',
    title: 'Android Developer / Tester',
    workingPeriod: '2016.1-2016.8',
    jobDescriptions: [
      'Developed a code module that played a fundamental role in the product.',
      'Conducted analysis on code modules to enhance performance.',
      'Wrote JUnit code for conducting comprehensive unit tests.',
    ],
    skills: [
      { imageUrl: '/icons/techstack/backend/java.png', name: 'Java' },
      { imageUrl: '/icons/techstack/db/sqlite.png', name: 'SQLite' },
      { imageUrl: '/icons/techstack/mobile/junit.png', name: 'Junit4' },
      { imageUrl: '', name: 'Working In Team' }
    ],
    testimonials: [
      {
        imageUrl: '',
        name: 'F.U.',
        position: 'Senior Software Engineer',
        words: 'He excels in both expressing his opinions and actively listening to others. His strong communication skills contribute significantly to effective collaboration and teamwork.',
        linkedInUrl: ''
      }
    ]
  } as ExperienceData,
  {
    companyName: 'ZL Technologies',
    companyLogoUrl: '/icons/companyLogos/zltech.png',
    title: 'Product Analyst',
    workingPeriod: '2016.8-2019.7',
    jobDescriptions: [
      'Evaluated structured and unstructured big data to formulate strategies, ensuring data accuracy and consistency throughout the system.',
      'Led an international project and managed a diverse team of 10 individuals from various countries.',
      'Created a code module responsible for handling the system\'s localization.',
      'Provided dedicated client support, delivering comprehensive explanations regarding the health of their system.'
    ],
    skills: [
      { imageUrl: '/icons/techstack/frontend/html.png', name: 'HTML' },
      { imageUrl: '/icons/techstack/frontend/css.png', name: 'CSS' },
      { imageUrl: '/icons/techstack/frontend/javascript.png', name: 'Javascript' },
      { imageUrl: '', name: 'Project Management' },
      { imageUrl: '', name: 'Working with Teams' },
      { imageUrl: '', name: 'Consulting on Tech' },
      { imageUrl: '', name: 'Customer Success' },
    ],
    testimonials: [
      {
        imageUrl: '',
        name: 'N.B.',
        position: 'Product Analyst',
        words: 'Tak possesses a clear focus. While he demonstrates a great attention to detail, he also balance this meticulous approach with efficiency for swift progress and adaptation.',
        linkedInUrl: ''
      }
    ]
  } as ExperienceData,
  {
    companyName: 'Fun Podium',
    companyLogoUrl: '/icons/companyLogos/funpodium.png',
    title: 'Android Developer',
    workingPeriod: '2022.9-2022.12',
    jobDescriptions: [
      'Resolved critical bugs deeply embedded in the code, significantly improving the user experience for a substantial user base.',
      'Efficiently developed new modules with a focus on bug-free implementation.',
      'Maintained close communication with the design team to facilitate progress and address issues collaboratively.'
    ],
    skills: [
      { imageUrl: '/icons/techstack/mobile/android.png', name: 'Android' },
      { imageUrl: '/icons/techstack/mobile/kotlin.png', name: 'Kotlin' },
      { imageUrl: '/icons/techstack/mobile/jetpack.png', name: 'Jetpack Library' },
      { imageUrl: '', name: 'Corutine' },
      { imageUrl: '', name: 'MVVM' },
      { imageUrl: '', name: 'Clean Architecture' },
      { imageUrl: '', name: 'Effective & Clear Communication' }
    ],
    testimonials: [
      {
        imageUrl: '',
        name: 'J.D',
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
    workingPeriod: '2023.1-present',
    jobDescriptions: [
      'Delivering NextJs and Android projects for clients with extreme care on details, aiming to make all of them satisfied.',
      'Teaching Java with focus on Algorithm and Data Structure.'
    ],
    skills: [
      { imageUrl: '/icons/techstack/frontend/nextjs.png', name: 'Next JS' },
      { imageUrl: '/icons/techstack/frontend/react.png', name: 'React' },
      { imageUrl: "/icons/techstack/frontend/typescript.png", name: "Typescript" },
      { imageUrl: "/icons/techstack/frontend/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: '/icons/techstack/mobile/android.png', name: 'Android' },
      { imageUrl: '/icons/techstack/mobile/kotlin.png', name: 'Kotlin' },
      { imageUrl: '/icons/techstack/backend/java.png', name: 'Java' },
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
      '/works/ec-admin1.png',
      '/works/ec-admin2.png',
      '/works/ec-admin3.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/icons/techstack/frontend/nextjs.png", name: "Next Js" },
      { imageUrl: "/icons/techstack/frontend/react.png", name: "React" },
      { imageUrl: "/icons/techstack/frontend/typescript.png", name: "Typescript" },
      { imageUrl: "/icons/techstack/frontend/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/icons/techstack/frontend/shadcnui.png", name: "Shadcn/ui" },
      { imageUrl: "/icons/techstack/db/planetscale.png", name: "Planetscale" },
      { imageUrl: "/icons/techstack/db/prisma.png", name: "Prisma" },
      { imageUrl: "/icons/techstack/db/mysql.png", name: "MySQL" },
      { imageUrl: "/icons/techstack/frontend/vercel.png", name: "Vercel" },
    ],
    link: ''
  } as WorkData,
  {
    name: 'ECommerce Storefront',
    description: 'Ecommerce store that works in conjunction with ECommerce Admin Suite',
    category: 'web',
    imageUrls: [
      '/works/ec-store1.png',
      '/works/ec-store2.png',
      '/works/ec-store3.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/icons/techstack/frontend/nextjs.png", name: "Next Js" },
      { imageUrl: "/icons/techstack/frontend/react.png", name: "React" },
      { imageUrl: "/icons/techstack/frontend/typescript.png", name: "Typescript" },
      { imageUrl: "/icons/techstack/frontend/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/icons/techstack/frontend/vercel.png", name: "Vercel" },
    ],
    link: ''
  } as WorkData,
  {
    name: 'Kakeibo',
    description: 'Simple Android app that keeps track of your income and spendings',
    category: 'mobile',
    imageUrls: [
      '/works/kakeibo1.png',
      '/works/kakeibo2.png',
      '/works/kakeibo3.png',
      '/works/kakeibo4.png',
      '/works/kakeibo5.png',
      '/works/kakeibo6.png',
      '/works/kakeibo7.png',
    ],
    isLive: true,
    skills: [
      { imageUrl: "/icons/techstack/mobile/android.png", name: "Android" },
      { imageUrl: "/icons/techstack/mobile/kotlin.png", name: "Kotlin" },
      { imageUrl: '/icons/techstack/mobile/jetpack.png', name: 'Jetpack Library' },
      { imageUrl: "/icons/techstack/db/sqlite.png", name: "SQLite" },
      { imageUrl: "", name: "MVVM" },
      { imageUrl: "", name: "Clean Architecture" },
      { imageUrl: "", name: "Dagger Hilt" },
      { imageUrl: "", name: "Retrofit" },
    ],
    link: 'https://play.google.com/store/apps/details?id=com.kakeibo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  } as WorkData,
  {
    name: 'This portfolio website',
    description: 'Simple web app with animation',
    category: 'web',
    imageUrls: ['/works/portfolio.png'],
    isLive: true,
    skills: [
      { imageUrl: "/icons/techstack/frontend/nextjs.png", name: "Next Js" },
      { imageUrl: "/icons/techstack/frontend/react.png", name: "React" },
      { imageUrl: "/icons/techstack/frontend/typescript.png", name: "Typescript" },
      { imageUrl: "/icons/techstack/frontend/tailwind.png", name: "Tailwind CSS" },
      { imageUrl: "/icons/techstack/frontend/framermotion.png", name: "Framer Motion" },
      { imageUrl: "/icons/techstack/sst.png", name: "SST" },
      { imageUrl: "/icons/techstack/aws-ses.png", name: "AWS SES" },
    ],
    link: ''
  } as WorkData,
] as const