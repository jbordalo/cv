// Icon file name constants
const ALEXA_PRIZE = "icons/alexa_prize.svg";
const NOVA = "icons/nova.svg";
const NOVALINCS = "icons/novalincs.svg";
const NOVASEARCH = "icons/novasearch.svg";
const TARDIS = "icons/tardis.svg";

export const RESUME_DATA = {
  name: "João Bordalo",
  initials: "JB",
  institution: "NOVA School of Science and Technology | FCT NOVA",
  institutionLink: "https://fct.unl.pt",
  location: "Caparica, Portugal, GMT+1",
  locationLink: "https://www.google.com/maps/place/Faculdade+de+Ci%C3%AAncias+e+Tecnologia+da+Universidade+Nova+de+Lisboa",
  summary: "Computer Science PhD Student focused on the self-management of distributed systems.",
  about: "I'm a Computer Science PhD Student at NOVA School of Science and Technology. Currently researching the applications of machine learning, namely reinforcement learning, for the self-management of complex distributed systems. The goal of my research is to reconfigure systems at runtime, for both optimization and reliability goals.",
  avatarUrl: "https://avatars.githubusercontent.com/u/21186306?v=4",
  personalWebsiteUrl: "https://jbordalo.github.io/",
  contact: {
    email: "j.bordalo@campus.fct.unl.pt",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jbordalo",
        icon: "github.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jbordalo/",
        icon: "linkedin.svg",
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=5Tu_yowAAAAJ",
        icon: "googlescholar.svg"
      }
    ],
  },
  education: [
    {
      school: "NOVA School of Science and Technology",
      degree: "PhD in Computer Science",
      start: "2024",
      end: null,
    },
    {
      school: "NOVA School of Science and Technology",
      degree: "MSc in Computer Science and Engineering",
      start: "2021",
      end: "2023",
    },
    {
      school: "NOVA School of Science and Technology",
      degree: "BSc in Computer Science and Engineering",
      start: "2018",
      end: "2021",
    },
  ],
  papers: [
    {
      title: "Generating Coherent Sequences of Visual Illustrations for Real-World Manual Tasks",
      authors: ["João Bordalo", "Vasco Ramos", "Rodrigo Valério", "Diogo Glória-Silva", "Yonatan Bitton", "Michal Yarom", "Idan Szpektor", "João Magalhães"],
      date: "2024",
      conference: "ACL 2024",
      document: "papers/2405.10122.pdf",
      links: [
        {
          name: "pdf",
          link: "papers/2405.10122.pdf"
        },
        {
          name: "poster",
          link: "posters/acl2024_poster.pdf"
        },
        {
          name: "code",
          link: "https://github.com/novasearch/generating-coherent-sequences"
        },
        {
          name: "acl",
          link: "https://aclanthology.org/2024.acl-long.690/"
        }
      ]
    },
    {
      title: "Visual Dialogue for Open Tasks",
      authors: ["João Bordalo"],
      date: "2023",
      conference: "MSc Dissertation",
      document: "papers/visual_dialogue_for_open_tasks.pdf",
      links: [
        {
          name: "pdf",
          link: "papers/visual_dialogue_for_open_tasks.pdf"
        },
        {
          name: "run",
          link: "https://run.unl.pt/handle/10362/163263"
        }
      ]
    },
    {
      title: "TWIZ-v2: The Wizard of Multimodal Conversational-Stimulus",
      authors: ["Rafael Ferreira", "Diogo Tavares", "Diogo Silva", "Rodrigo Valério", "João Bordalo", "Inês Simões", "Vasco Ramos", "David Semedo", "João Magalhães"],
      date: "2023",
      conference: "Technical Report",
      document: "papers/2310.02118.pdf",
      links: [
        {
          name: "pdf",
          link: "papers/2310.02118.pdf"
        },
        {
          name: "arXiv",
          link: "https://arxiv.org/abs/2310.02118"
        }
      ]
    },
    {
      title: "Transferring Visual Attributes from Natural Language to Verified Image Generation",
      authors: ["Rodrigo Valério", "João Bordalo", "Michal Yarom", "Yonatan Bitton", "Idan Szpektor", "João Magalhães"],
      date: "2023",
      conference: "Preprint",
      document: "papers/2305.15026.pdf",
      links: [
        {
          name: "pdf",
          link: "papers/2305.15026.pdf"
        },
        {
          name: "arXiv",
          link: "https://arxiv.org/abs/2305.15026"
        }
      ]
    }
  ],
  work: [
    {
      company: "NOVA Laboratory for Computer Science and Informatics",
      company_link: "https://nova-lincs.di.fct.unl.pt/",
      link: "https://www.project-tardis.eu/",
      badges: ["Research", "Distributed Systems", "Machine Learning"],
      title: "TaRDIS - Trustworthy And Resilient Decentralised Intelligence For Edge Systems",
      logo: TARDIS,
      start: "2024",
      end: null,
      description: "Member of the TaRDIS project, working on the self-management of distributed sysyems. TaRDIS’s primary goal is to significantly ease the complexity and reduce the effort of building correct and efficient heterogeneous swarms. TaRDIS focuses on supporting the correct and efficient development of applications for swarms and decentralised distributed systems, by combining a novel programming paradigm with a toolbox for supporting the development and execution of applications.",
    },
    {
      company: "NOVA Laboratory for Computer Science and Informatics",
      company_link: "https://nova-lincs.di.fct.unl.pt/",
      link: "https://novasys.di.fct.unl.pt/",
      badges: ["Research", "Distributed Systems", "Machine Learning"],
      title: "NOVA LINCS Researcher",
      logo: NOVALINCS,
      start: "2024",
      end: null,
      description: "Member of the NOVA LINCS Computer Systems Group at NOVA School of Science and Technology | FCT NOVA, conducting my PhD and researching the self-management of distributed systems.",
    },
    {
      company: "NOVA School of Science and Technology | FCT NOVA",
      company_link: "https://fct.unl.pt",
      link: "https://www.amazon.science/alexa-prize/taskbot-challenge",
      badges: ["Research", "Machine Learning", "Conversational Agents"],
      title: "Alexa Prize TaskBot Challenge 2",
      logo: ALEXA_PRIZE,
      start: "2022",
      end: "2023",
      description: "Team member of team TWIZ, winning team in Amazon's Alexa Prize TaskBot Challenge 2, working on visual dialogue and coherent image generation. Alexa Prize TaskBot Challenge is a university challenge focused on developing multimodal (voice, text, and touch) conversational agents that assist customers in completing tasks requiring multiple steps and decisions.",
    },
    {
      company: "NOVA Laboratory for Computer Science and Informatics",
      company_link: "https://nova-lincs.di.fct.unl.pt/",
      link: "https://wiki.novasearch.org/",
      badges: ["Research", "Machine Learning", "Image Generation"],
      title: "NOVA LINCS Researcher",
      logo: NOVALINCS,
      start: "2022",
      end: "2023",
      description: "Member of the NOVA LINCS Multimodal Systems Group at NOVA School of Science and Technology | FCT NOVA. Conducted my MSc dissertation, entitled \"Visual Dialogue for Open Tasks\", focused on multimodal systems, visual dialogue, and coherent image sequence generation.",
    },
    {
      company: "Hypnotic Digital Agency",
      link: "https://hypnoticagency.com/",
      badges: ["Frontend"],
      title: "Frontend Developer (Intern)",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
      start: "2021",
      end: "2021",
      description: "Frontend developer intern, working with Vue.js, Tailwind, and Nuxt.js. Developed initial integration with Wordpress, using GraphQL.",
    }
  ],
  awards: [
    {
      title: "PhD Studentship",
      awarder: "FCT - Fundação para a Ciência e Tecnologia",
      awarderUrl: "https://www.fct.pt",
      link: "https://www.fct.pt/en/concursos/concurso-bolsas-de-doutoramento-2024-linha-de-candidatura-geral-1-1",
      date: "Aug 1, 2024",
      description: "To fulfil its aim of promoting a national public policy for advanced training with social relevance and impact, the Fundação para a Ciência e a Tecnologia, I.P. (FCT) opens a Call for granting PhD studentships."
    },
    {
      title: "1st place in the Alexa Prize TaskBot Challenge 2",
      awarder: "Amazon Science",
      awarderUrl: "https://www.amazon.science/",
      link: "https://www.amazon.science/alexa-prize/taskbot-challenge/2022",
      date: "Oct 3, 2023",
      description: "Member of the winning team TWIZ in the Alexa Prize TaskBot Challenge 2. Check our <a href=\"\">technical report</a>."
    },
    {
      title: "NOVA Young Talent Award",
      awarder: "NOVA School of Science and Technology | FCT NOVA",
      awarderUrl: "https://fct.unl.pt",
      link: "certificates/nova_award.pdf",
      date: "May 18, 2021",
      description: "The 'NOVA Young Talent Awards' honor the students who stood out in the 1st year of their Bachelor Degree or Integrated Masters at NOVA. The award is given to the students with the highest average in the first year of their respective course."
    }
  ],
  volunteering: [
    {
      title: "ACM Multimedia 2022",
      organization: "ACM Multimedia",
      organizationUrl: "https://2022.acmmm.org/",
      certificateUrl: "certificates/acmmm22_certificate.pdf",
      date: "Oct 10, 2022 - Oct 14, 2022",
      description: "Volunteer at ACM Multimedia 2022."
    },
    {
      title: "DisCoTec 2023",
      organization: "DisCoTec",
      organizationUrl: "http://www.discotec.org/2023/",
      certificateUrl: "certificates/discotec_certificate.pdf",
      date: "Jun 19, 2023 - Jun 23, 2023",
      description: "Volunteer at DisCoTec 2023."
    },
    {
      title: "EXPO Faculdade de Ciências e Tecnologias 2023",
      organization: "NOVA School of Science and Technology | FCT NOVA",
      organizationUrl: "https://fct.unl.pt",
      certificateUrl: "certificates/expo_certificate.pdf",
      date: "Apr 19, 2023",
      description: "Volunteer at EXPO Faculdade de Ciências e Tecnologias 2023."
    },
    {
      title: "EXPO Faculdade de Ciências e Tecnologias 2024",
      organization: "NOVA School of Science and Technology | FCT NOVA",
      organizationUrl: "https://fct.unl.pt",
      // certificateUrl: 'certificates/expo_certificate.pdf', // Uncomment if a certificate will be added later
      date: "Apr 10, 2024",
      description: "Volunteer at EXPO Faculdade de Ciências e Tecnologias 2024."
    }
  ],
  projects: [
    {
      title: "Alexa Prize TaskBot Challenge 2",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description: "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ALEXA_PRIZE,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
};