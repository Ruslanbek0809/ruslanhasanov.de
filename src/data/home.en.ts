import type { HomeContent } from './types';

const home: HomeContent = {
  seo: {
    title: 'Ruslan Hasanov | AI/ML Engineer, Time Series & LLM Agents',
    description:
      'AI/ML engineer and M.Sc. student at TU Ilmenau. Time-series models, LLM agents, 4+ years of Flutter apps. Bremerhaven.',
  },

  hero: {
    name: 'Ruslan Hasanov',
    role: 'M.Sc. student at TU Ilmenau · DAAD scholar',
    pitch:
      'AI/ML engineer who ships. Time-series models and LLM agents.',
    availability: 'Available now',
    buttons: { work: 'View work', contact: 'Get in touch' },
    facts: {
      heading: 'Key facts',
      asOf: '11/2026',
      status: {
        label: 'Status',
        stripLabel: 'Availability',
        value: 'Available now',
        detail: 'part-time or full-time (working student possible) · remote or on site in the Bremerhaven–Bremen area',
        stripValue: 'Available now',
        stripDetail: 'part-time or full-time (working student possible) · remote or on site in the Bremerhaven–Bremen area',
      },
      location: {
        label: 'Location',
        value: 'Bremerhaven, Germany',
        stripValue: 'Bremerhaven',
        stripDetail: 'Germany',
      },
      thesis: {
        label: 'Thesis',
        value: "Master's thesis until 03/2027",
        stripValue: 'until 03/2027',
        stripDetail: 'TU Ilmenau',
      },
      funding: {
        label: 'Funding',
        value: 'Full DAAD scholarship',
        stripValue: 'DAAD',
        stripDetail: 'full scholarship',
      },
    },
  },

  highlights: {
    eyebrow: 'highlights',
    heading: 'Highlights',
    items: [
      { index: '[models]', value: '6', caption: 'foundation models in my thesis' },
      {
        index: '[forecast error]',
        value: '29 %',
        caption: 'lower 24-hour error (preliminary pilot)',
        bars: { reference: 'seasonal-naive', model: 'Chronos-2', ratio: 0.71 },
      },
      { index: '[experiments]', value: '192', caption: 'LLM forecasting experiments' },
      { index: '[scale]', value: '55,000+', caption: 'app downloads' },
    ],
  },

  work: { eyebrow: 'work', heading: 'Featured work' },

  shipped: {
    eyebrow: 'shipped',
    heading: 'Shipped software',
    intro: 'Four years of mobile apps, mostly Flutter.',
    jobs: [
      {
        name: 'Flipgoo',
        role: 'Software Developer (Mobile and Client Applications)',
        period: '09/2023 – 09/2024',
        place: 'Budapest, Hungary',
        text: 'I built a Flutter marketplace app for iOS and Android, with premium and business accounts. I integrated subscriptions, sign-in, maps and error monitoring.',
      },
      {
        name: 'Yashyl Ada',
        role: 'Software Developer (Mobile and Client Applications)',
        period: '03/2021 – 02/2024',
        place: 'Ashgabat, Turkmenistan',
        text: 'I built two iOS/Android apps and released three in the stores. Customer satisfaction reached 95 % within three months.',
      },
      {
        name: 'Freelance',
        role: 'Flutter Developer',
        period: '11/2020 – 03/2021',
        place: 'Ashgabat, Turkmenistan',
        text: 'I built a retailer’s app (revenue +47 %) and an online shop with 20,000+ downloads and 100,000+ transactions.',
      },
      {
        name: 'Sanly Galam',
        role: 'Junior Software Developer (Mobile)',
        period: '12/2019 – 11/2020',
        place: 'Ashgabat, Turkmenistan',
        text: 'I covered about 90 % of the app lifecycle, from concept to support. I improved the performance of a production app by 70 %.',
      },
      {
        name: 'Digital Solution 2020',
        role: 'Competition entry',
        period: '12/2020',
        text: 'I led an e-health system for doctors and patients. 1st place of 23 teams in healthcare.',
      },
    ],
    openSourceHeading: 'Open source',
    repos: [
      {
        name: 'Yummify',
        url: 'https://github.com/Ruslanbek0809/Yummify',
        stars: '30 stars',
        lang: 'Dart',
        text: 'Restaurant menu app in Flutter. MVVM, Stacked, JSON API.',
      },
      {
        name: 'DigitalSignature',
        url: 'https://github.com/Ruslanbek0809/DigitalSignature',
        stars: '16 stars',
        lang: 'Dart',
        text: 'Digital signature app “E-Gol”.',
      },
      {
        name: 'yoda_restoran',
        url: 'https://github.com/Ruslanbek0809/yoda_restoran',
        stars: '2 stars',
        lang: 'Dart',
        text: 'Restaurant app in MVVM clean architecture.',
      },
      {
        name: 'thuri_cycle',
        url: 'https://github.com/Ruslanbek0809/thuri_cycle',
        lang: 'Dart',
        text: 'App for recycling and waste reduction in Thuringia.',
      },
      {
        name: 'sensbee_nvp',
        url: 'https://github.com/Ruslanbek0809/sensbee_nvp',
        lang: 'Python',
        text: 'FastAPI service predicting the next value of smart-city sensor data.',
      },
      {
        name: 'hw-verif-agent',
        url: 'https://github.com/Ruslanbek0809/hw-verif-agent',
        lang: 'SystemVerilog, Python',
        text: 'Python LLM agent for hardware verification.',
      },
      {
        name: 'img_harmnztn_impls',
        url: 'https://github.com/Ruslanbek0809/img_harmnztn_impls',
        lang: 'Python',
        text: 'Classic image harmonization methods.',
      },
    ],
  },

  about: {
    eyebrow: 'about',
    heading: 'About',
    paragraphs: [
      'I study Computer and Systems Engineering (M.Sc.) at TU Ilmenau on a DAAD scholarship and live in Bremerhaven. Coursework is done: 90 CP, average grade 2.1.',
      'My thesis tests six pretrained time-series models on real smart-city sensor data. Before that I worked on LLM forecasting and on an LLM agent for hardware verification, and built mobile apps for four years.',
    ],
    now: {
      label: 'Currently',
      text: [
        "Master's thesis at TU Ilmenau, 09/2026 – 03/2027.",
        'Databases and Information Systems Group.',
      ],
    },
  },

  experience: {
    eyebrow: 'experience',
    heading: 'Experience & education',
    legend: { work: 'Work', study: 'Studies' },
    items: [
      {
        period: '09/2026 – 03/2027',
        title: "Master's thesis (time-series foundation models)",
        org: 'TU Ilmenau, Databases and Information Systems Group',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '04/2026 – 08/2026',
        title: 'Group studies: LLM-agent hardware verification',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '10/2025 – 03/2026',
        title: 'Research project: zero-shot forecasting with LLMs',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '10/2024 – 03/2027',
        title: 'M.Sc. student, DAAD scholar',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '09/2023 – 09/2024',
        title: 'Software Developer (Mobile and Client Applications)',
        org: 'Flipgoo',
        place: 'Budapest, Hungary',
        kind: 'work',
      },
      {
        period: '03/2021 – 02/2024',
        title: 'Software Developer (Mobile and Client Applications)',
        org: 'Yashyl Ada',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '11/2020 – 03/2021',
        title: 'Flutter Developer',
        org: 'Freelance',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '12/2019 – 11/2020',
        title: 'Junior Software Developer (Mobile)',
        org: 'Sanly Galam',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
    ],
    educationHeading: 'Education',
    education: [
      {
        degree: 'M.Sc. Research in Computer and Systems Engineering',
        school: 'Technische Universität Ilmenau, Germany',
        period: '10/2024 – 03/2027',
        details:
          "90 CP, average grade 2.1. Thesis in progress. Courses: Deep Learning, Advanced Database Systems, Cloud Computing, Software Systems Engineering.",
      },
      {
        degree: 'B.Sc. Computer Science and Information Technology',
        school: 'Oguzhan Engineering and Technology University of Turkmenistan, Ashgabat',
        period: '09/2016 – 06/2021',
        details:
          'Grade 87/100 (German equivalent 1.7). Focus: C++, algorithms, operating systems, data structures.',
      },
      {
        degree: 'Graduate Record Examinations (GRE) course',
        school: 'American Councils for International Education, Ashgabat',
        period: '03/2022 – 07/2022',
        details: 'Analytical and quantitative reasoning, completed with 90 %.',
      },
    ],
    awardsHeading: 'Awards',
    awards: [
      {
        title: "Full Scholarship, DAAD Master's Programme",
        detail: 'German Academic Exchange Service (DAAD), Bonn.',
        period: '10/2024 – 03/2027',
      },
      {
        title: '1st place of 23 teams, healthcare category',
        detail:
          'Digital Solution 2020, Ashgabat. I led an e-health system for doctors and patients.',
        period: '12/2020',
      },
    ],
  },

  skills: {
    eyebrow: 'skills',
    heading: 'Skills & languages',
    groups: [
      {
        title: 'Programming',
        items: ['Python (NumPy, pandas)', 'C/C++', 'Java', 'Dart', 'Swift', 'SQL', 'Shell scripting'],
      },
      {
        title: 'AI and ML',
        items: [
          'PyTorch',
          'TensorFlow/Keras',
          'Hugging Face',
          'AutoGluon',
          'CNNs and transfer learning (classification, localization, segmentation)',
          'Pretrained foundation models (zero-shot, fine-tuning)',
          'LLMs and LLM agents',
        ],
      },
      {
        title: 'Evaluation',
        items: [
          'Benchmark design',
          'Uncertainty quantification (quantile forecasts, interval coverage, recalibration)',
          'Statistical tests (Diebold-Mariano, Holm correction, bootstrap)',
        ],
      },
      {
        title: 'Systems',
        items: ['Linux', 'SSH', 'HPC GPU cluster (NVIDIA A100)', 'Docker', 'FastAPI', 'Git/GitLab', 'PostgreSQL', 'MongoDB'],
      },
      {
        title: 'Mobile and backend',
        items: ['Flutter', 'Firebase', 'RevenueCat', 'Sentry', 'Twilio', 'Google Maps', 'Django'],
      },
    ],
    languagesHeading: 'Languages',
    languages: [
      { name: 'English', level: 'fluent (C1), TOEFL iBT 108/120' },
      { name: 'German', level: 'basic (A2), B1 in progress' },
      { name: 'Turkish', level: 'fluent' },
      { name: 'Russian', level: 'advanced' },
      { name: 'Uzbek, Turkmen', level: 'native' },
    ],
  },

  contact: {
    eyebrow: 'contact',
    heading: 'Get in touch',
    invitation:
      'Available now, part-time or full-time, remote or in the Bremerhaven–Bremen area. Write about AI/ML, forecasting or LLM agents.',
  },

  person: {
    jobTitle: 'AI/ML Engineer',
    almaMater: 'Oguzhan Engineering and Technology University of Turkmenistan',
  },
};

export default home;
